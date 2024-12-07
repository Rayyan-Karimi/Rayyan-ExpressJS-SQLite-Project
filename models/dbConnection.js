import sqlite3 from 'sqlite3'

const sqlite3Verbose = sqlite3.verbose()
export default sql = new sqlite3Verbose.Database("./root/testdb.db", sqlite3Verbose.OPEN_READWRITE | sqlite3Verbose.OPEN_CREATE, (error) => {
    if (error) {
        console.error(error)
        throw error;
    } else {
        console.log("DB Connection successful.")
    }
})