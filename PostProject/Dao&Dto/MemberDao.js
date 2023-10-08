const mysql = require('mysql2/promise'); // Use promise-based MySQL2 library

const connection = {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '1234',
    database: 'test'
};

const pool = mysql.createPool(connection);

console.log("Here is MemberDao!!!");

module.exports = {
    processUserInfo: async function (userInfo, callback) {
        try {
            const connection = await pool.getConnection();
            const sql = "INSERT INTO member (id, pw, name, nickName, Email, gender) VALUES (?, ?, ?, ?, ?, ?)";
            const values = [
                userInfo.id,
                userInfo.pw,
                userInfo.name,
                userInfo.nickName,
                userInfo.email,
                userInfo.gender
            ];
            await connection.query(sql, values);
            connection.release();
            callback("User Created Successfully");
        } catch (err) {
            console.error("Database Query Error:", err);
            throw err;
        }
    },

    loginfo: async function (userInfo, callback) {
        try {
            const connection = await pool.getConnection();
            const sql = "SELECT id, pw FROM member WHERE id = ? AND pw = ?";
            const values = [userInfo.id, userInfo.pw];
            const [rows] = await connection.query(sql, values);
            connection.release();
            
            if (rows.length > 0) {
                console.log("아이디와 비밀번호가 일치함. 로그인 하겠다.");
                callback(true);
            } else {
                console.log("일치하는 아이디가 없다.");
                callback(false);
            }
        } catch (err) {
            console.error("Database Query Error:", err);
            throw err;
        }
    }
};
