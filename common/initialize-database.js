const mysql = require('mysql2');

/**
 * Getting database details from environment variable
 */ 
const mysqlHost = process.env.MYSQL_HOST || 'localhost';
const mysqlPort = process.env.MYSQL_PORT || '6603';
const mysqlUser = process.env.MYSQL_USER || 'root';
const mysqlPass = process.env.MYSQL_PASS || 'password';
const mysqlDB   = process.env.MYSQL_DB   || 'my-test-db';

/**
 * Creating connection pool options
 */ 
const connectionPoolOptions = {
  host: mysqlHost,
  port: mysqlPort,
  user: mysqlUser,
  password: mysqlPass,
  database: mysqlDB,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0
};
/**
 * Creating connection pool
 */
console.log('Creating Database client...');
const databasePool = mysql.createPool(connectionPoolOptions);
const databaseClient = databasePool.promise();

module.exports = databaseClient;