// Archivo de configuración para migrations (dev08)

const { envVars } = require('../config/env');

module.exports = {
    development: { storage: "database.db", dialect: "sqlite", logging: true },
    production: { 
        dialect: "postgres", 
        host: envVars.dbHost,
        port: 5432,
        username: envVars.dbUser,
        password: envVars.dbPwd,
        database: envVars.dbName,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
    },
};
