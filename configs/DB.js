import 'dotenv/config'

export const DB = {
    server: process.env.DB_SERVER,
    authentication: {
        type: 'default',
        options: {
            userName: process.env.DB_USER, // update me
            password: process.env.DB_PASSWORD // update me
        }
    }
}