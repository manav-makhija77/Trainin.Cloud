const Connect = require('./db.js');
Connect();

var cors = require('cors')
const express = require('express')
const app = express()
const port = 5000



app.get('/', (req, res) => {
  res.send('Hello Manav ye trainin.cloud hai ')
})

//Yae middleware hai 
app.use(express.json())

app.use(cors())

//Creating Multiple Routers
app.use('/api/auth', require('./Routes/Auth'))
// app.use('/api/notes', require('./Routes/Notes'))

app.listen(port, () => {
  console.log(`Trainin.Cloud listening on port ${port}`)
})

