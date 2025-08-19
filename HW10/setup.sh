#!/bin/bash

echo "📦 Установка зависимостей..."
npm install --save-dev prettier eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react @typescript-eslint/parser @typescript-eslint/eslint-plugin

echo "⚙️ Создание файлов настроек..."

# Prettier config
cat > .prettierrc <<EOL
{
  "singleQuote": false,
  "semi": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "printWidth": 80
}
EOL

# Prettier ignore
cat > .prettierignore <<EOL
node_modules
build
dist
package-lock.json
EOL

# ESLint config
cat > .eslintrc.json <<EOL
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint", "prettier"],
  "rules": {
    "prettier/prettier": "error",
    "react/prop-types": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
EOL

# EditorConfig
cat > .editorconfig <<EOL
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
EOL

echo "✅ Все файлы созданы и зависимости установлены!"

