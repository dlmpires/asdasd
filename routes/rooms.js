import express from 'express'

export const roomsRouter = express.Router()

roomsRouter.get('/', (req, res) => {
    console.log(req.body)
    res.send('Aqui estão os quartos')
})

roomsRouter.get('/:id', (req, res) => {
    const roomId = req.params.id;
    const query = `SELECT * FROM rooms WHERE id_room = ?`;
    console.log(req.body)
    res.query("Select (id_room) from rooms")
})