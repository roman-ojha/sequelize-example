import { Sequelize } from "sequelize";

// Implement Sequelize And database connection
// Connection
const database_name = process.env.DATABASENAME as string;
const database_username = process.env.DATABASEUSER as string;
const database_password = process.env.DATABASEPASSWORD as string;
const db = new Sequelize(database_name, database_username, database_password, {
  host: "localhost",
  dialect: "postgres",
  // operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default db;
