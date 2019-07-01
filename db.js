//连接数据库
const mysql = require ('mysql')
const connection  = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : 'root',
    database : 'sh_video',
    charset  : 'utf8_general_ci'
});
connection.connect();

//别忘了导出
module.exports = connection