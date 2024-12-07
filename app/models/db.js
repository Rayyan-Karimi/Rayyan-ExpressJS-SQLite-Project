import sqlite from 'mysql'
import dbConfig from '../config/db.config'

const connection = sqlite.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

connection.connect(error => {
    if(error) throw error;
    console.log("Successfully connected to database.")
})

export default connection;