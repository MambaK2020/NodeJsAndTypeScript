import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

const SECRET_JWT = process.env.SECRET_JWT;
const PORT = process.env.PORT;

const app = express();

function logRequest(req, _, next){
    console.log(`Method request: ${req.method}. URL request: ${req.url}`);
    next()
};

function authenticateJWT(req,res,next){
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if(!token) {
        return res.status(401).send({message: 'Unauthorized access: no token provided'});
    }

    jwt.verify(token, SECRET_JWT, (err,user)=>{
        if(err) {
            return res.status(403).send({message:'The token is invalid or expired'});
        }
        req.user = user;
        next()
    })

};

const users = [{
    id:1,
    username: 'Mamba',
    email: 'testemail@gmail.com',
    password: await bcrypt.hash('123456aq', 12),
    role:'user',
},
{
    id: 2,
    username: "Admin",
    email: "admin@gmail.com",
    password: await bcrypt.hash("admin123", 12),
    role: "admin",
            

}];

app.use(express.json());
app.use(logRequest);

app.get('/', (req, res)=> {
    res.send('Home page');
    });

    app.post("/login", async (req, res) => {
        const { email, password } = req.body;
      
        const user = users.find((u) => u.email === email);
        if (!user) {
          return res.status(404).send({ message: "User not found" });
        }
      
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
          return res.status(401).send({ message: "Invalid credentials" });
        }
      
        const token = jwt.sign(
          { userId: user.id, email: user.email, role: user.role },
          SECRET_JWT,
          { expiresIn: "1h" }
        );
      
        res.send({ message: "Login successful", token });
      });
    
    app.put('/update-email', authenticateJWT, (req,res)=>{
        const { email } = req.body;
        if(!email) {
            return res.status(400).send({ message: 'User name or email not found' });
        }

        const userId = req.user.userId;
        const user = users.find(u => u.id === userId);
        if (!user) {
        return res.status(404).send({ message: 'User not found' });
    }

    user.email = email;

    res.send({ message: 'Profile updated', user });
});

app.delete("/delete-account", authenticateJWT, (req, res) => {
    const userId = req.user.userId;
  
    const index = users.findIndex((u) => u.id === userId);
    if (index === -1) {
      return res.status(404).send({ message: "User not found" });
    }
  
    users.splice(index, 1);
    res.send({ message: "Account deleted successfully" });
  });

  app.put("/update-role", authenticateJWT, authorizeRole("admin"), (req, res) => {
    const { id, role } = req.body;
    if (!id || !role) {
      return res.status(400).send({ message: "User ID and new role required" });
    }
  
    const user = users.find((u) => u.id === id);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
  
    user.role = role;
    res.send({ message: "Role updated", user });
  });

  app.post("/refresh-token", authenticateJWT, (req, res) => {
    const { userId, email, role } = req.user;
  
    
    const newToken = jwt.sign({ userId, email, role }, SECRET_JWT, {
      expiresIn: "1h",
    });
  
    res.send({ message: "Token refreshed", token: newToken });
  });

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});