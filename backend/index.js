//EXPRESS
const express = require('express')
const app = express()
const port = process.env.PORT || 3001

//CORS
const cors = require('cors');

app.use(cors({
  origin: '*'
}));

//KNEX
const knex = require('knex')
const config = require('./knexfile')['development']
const database = knex(config)



app.get('/', async (req, res) => {
  let query = await database('test').select('*')
  console.log(query)
  await res.status(200).send(query)
})

app.listen(port, () => {
  console.log('Listening on port ', port)
})