import express from 'express'
import bodyParser from 'body-parser'
import {roomsRouter} from './routes/rooms.js'
import sql from 'msnodesqlv8'

const connectionString = "server=(localdb)\\MSSQLlocaldb;Database=db_tranquil;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";
const app = express()
const port = 6969
const query = "SELECT * FROM rooms";

sql.query(connectionString, query, (err, rows) => {
    console.log(rows);
});


app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World, Garcia Gay')
})

app.use('/rooms', roomsRouter)

app.listen(port, '0.0.0.0', () => {
    console.log(`App listening on http://localhost:${port}`)
})