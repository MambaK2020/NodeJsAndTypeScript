import { Sequelize } from "sequelize";
import configData from './config.js';
import dotenv from 'dotenv';
dotenv.config();
const env = process.env.NODE_ENV || 'development';
const config = configData[env];
console.log(JSON.stringify(config));
// Создаем экземпляр Sequelize
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
    }
)
export default sequelize

