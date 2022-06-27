module.exports = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "rootAdmin",
    "database": "testUser",
    "entities": ['./entity/*.ts'],
    "synchronize": true,
    "logging": true
}