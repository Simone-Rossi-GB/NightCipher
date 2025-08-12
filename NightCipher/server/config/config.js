const config = {
    development: {
        server: {
            host: 'localhost',
            port: 3000,
        },
        cors: {
            origin: 'http://localhost:1420',
            methods: ["GET", "POST"]
        },
        socket: {
            cors: {
                origin: "http://localhost:1420",
                methods: ["GET", "POST"]
            }
        },
        database: {
            url: 'mongodb://localhost:27017/nightcipher-dev'
        }
    },

    production: {
        server: {
            host: '0.0.0.0',
            port: process.env.PORT || 3000,
        },
        cors: {
            origin: process.env.FRONTEND_URL || '*',
            methods: ["GET", "POST", "PUT", "DELETE"]
        },
        socket: {
            cors: {
                origin: process.env.FRONTEND_URL || '*',
                methods: ["GET", "POST"]
            }
        },
        database: {
            url: process.env.DATABASE_URL || 'mongodb://localhost:27017/nightcipher-prod'
        }
    },

    local_network: {
        server: {
            host: '0.0.0.0',
            port: 3000,
        },
        cors: {
            origin: '*',
            methods: ["GET", "POST"]
        },
        socket: {
            cors: {
                origin: '*',
                methods: ["GET", "POST"]
            }
        },
        database: {
            url: 'mongodb://localhost:27017/nightcipher-local'
        }
    }
};

const environment = process.env.NODE_ENV || 'development';
module.exports = config[environment];