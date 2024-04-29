import mysql, { Pool, PoolConnection } from 'promise-mysql';
import keys from './keys';

//const pool = mysql.createPool(keys.database);

//pool.getConnection()
//.then(connection =>{
//	pool.releaseConnection(connection);
//	console.log('Database Conectada');
//})


const pool = (query: string): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    let connection: PoolConnection;
    mysql
      .createPool(keys.database)
      .then((mysqlPool: Pool) => mysqlPool.getConnection())
      .then((conn: PoolConnection) => {
        connection = conn;
        console.log("Connection opened", query);
        return connection.query(query);
      })
      .then((result: any) => {
        console.log("Query executed successfully");
        connection.release();
        console.log("Connection closed");
        resolve(result);
      })
      .catch((error: Error) => {
        console.error("An error occurred:", error);
        if (connection) {
          connection.release();
        }
        reject(error);
      });
  });
};



export default pool;
