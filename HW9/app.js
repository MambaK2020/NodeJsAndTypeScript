import express from "express";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const users = [];

function requireUser(req, res, next) {
  const { email } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(401).send("Пользователь не найден");
  }
  req.user = user;
}

function requireRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).send("Доступ запрещён");
    }
    next();
  };
}

app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Email и пароль обязательны");
    }

    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      return res.status(400).send("Такой email уже зарегистрирован");
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    users.push({
      email,
      password: hashedPassword,
      mustChangePassword: false,
      role: "user",
    });

    res.status(201).send("Пользователь зарегистрирован");
  } catch (err) {
    console.error(err);
    res.status(500).send("Ошибка регистрации");
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = users.find((u) => u.email === email);
    if (!user) {
      return res.status(400).send("Пользователь не найден");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send("Неверный пароль");
    }

    if (user.mustChangePassword) {
      return res.status(403).send("Необходимо сменить пароль перед входом");
    }

    res.send("Успешный вход в систему");
  } catch (err) {
    console.error(err);
    res.status(500).send("Ошибка входа");
  }
});

app.post("/force-change-password", requireUser, (req, res) => {
  req.user.mustChangePassword = true;
  res.send("Пользователю установлена обязательная смена пароля");
});

app.post("/change-password", requireUser, async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    const isPasswordValid = await bcrypt.compare(
      oldPassword,
      req.user.password
    );
    if (!isPasswordValid) {
      return res.status(400).send("Старый пароль неверен");
    }

    req.user.password = await bcrypt.hash(newPassword, 12);
    req.user.mustChangePassword = false;

    res.send("Пароль успешно изменён");
  } catch (err) {
    console.error(err);
    res.status(500).send("Ошибка при смене пароля");
  }
});

app.post("/delete-account", requireUser, async (req, res) => {
  try {
    const { password } = req.body;

    const isPasswordValid = await bcrypt.compare(password, req.user.password);
    if (!isPasswordValid) {
      return res.status(400).send("Неверный пароль");
    }

    const index = users.indexOf(req.user);
    users.splice(index, 1);

    res.send("Аккаунт удалён");
  } catch (err) {
    console.error(err);
    res.status(500).send("Ошибка при удалении аккаунта");
  }
});

app.get("/admin", requireUser, requireRole("admin"), (req, res) => {
  res.send("Добро пожаловать в админ-панель");
});

app.post("/change-email", requireUser, async (req, res) => {
  try {
    const { newEmail, password } = req.body;

    const isPasswordValid = await bcrypt.compare(password, req.user.password);
    if (!isPasswordValid) {
      return res.status(400).send("Пароль неверен");
    }

    const existingUser = users.find((u) => u.email === newEmail);
    if (existingUser) {
      return res.status(400).send("Email уже используется");
    }

    req.user.email = newEmail;
    res.send("Email успешно изменён");
  } catch (err) {
    console.error(err);
    res.status(500).send("Ошибка при изменении email");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
