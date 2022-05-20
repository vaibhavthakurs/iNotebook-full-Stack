const connectToMongo = require('./db');
var cors = require('cors');
const express = require('express')

connectToMongo();
const app = express()
const port = 5001 

//MERN
// app.get('/', (req, res) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify({ a: 1 }));
// })

app.use(cors())
app.use(express.json())
//Available Routes
app.use('/api/auth', require('./routes/auth')) 
app.use('/api/notes', require('./routes/notes')) 


// app.get('/', (req, res) => {
//     res.send('Hello Vaibhav!')
//   })

//   app.get('/api/v1/login', (req, res) => {
//     res.send('Hello login!')
//   })

//   app.get('/api/v1/signup', (req, res) => {
//     res.send('Hello signup!')
//   })

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})
