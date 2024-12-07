-- Make db on terminal
sqlite3 testdb.db
-- Queries to run my SQLite
create table if not exists tutorials (
    id integer not null primary key autoincrement,
    title text not null,
    description text not null,
    published boolean default false
);