const mysql = require("mysql2");
const express = require("express");
const app = express();
const connect = {
    host: '127.0.0.1',
    port: "3306",
    user: "root",
    password: '1234',
    database: 'test'
};

let conn = mysql.createConnection(connect);

module.exports = {
    createBoard: function (boardDto) {
        let sql = " INSERT INTO board (no, title, contents, nickName) VALUES (?, ?, ?, ?)";
    }
};