import { MongoClient} from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const client = new MongoClient(process.env.MONGO_URL);

let db;

export async function connectDB() {
    try {
        await client.connect();
        console.log('Connection to MongoDB established!');
        db=client.db();
    } catch (error) {
        console.error('Error connection: ', error);
        process.exit(1);
    }
    
}

export function getDB() {
    if(!db) throw new Error('The database is not connected!');
    return db;
}