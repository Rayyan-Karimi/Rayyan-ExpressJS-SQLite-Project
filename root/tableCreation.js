// const sqlite3 = require('sqlite3').verbose();
import sqlite3 from 'sqlite3'

const sqlite3Verbose = sqlite3.verbose()

export const db = new sqlite3Verbose.Database("./root/testdb.db", sqlite3Verbose.OPEN_READWRITE, (err) => {
    if (err)
        console.error("Error connecting to database:", err.message)
    else
        console.log("Connected to the database for table creation.")
})

// TABLE CREATION QUERY
export const tableCreationQuery = `
create table tutorials (
id integer not null primary key autoincrement, 
title text not null, 
description text not null, 
published boolean not null default false)
`