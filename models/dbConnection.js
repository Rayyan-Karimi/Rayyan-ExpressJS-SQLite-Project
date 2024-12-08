import sqlite3 from 'sqlite3';

const sqlite3Verbose = sqlite3.verbose()
export default new sqlite3Verbose.Database("./root/testdb.db", sqlite3Verbose.OPEN_READWRITE, (error) => {
    if (error) {
        console.error(error)
        throw error;
    } else {
        console.log("DB Connection successful.")
    }
})