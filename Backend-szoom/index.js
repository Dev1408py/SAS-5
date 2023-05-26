// Boiler code. 
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// to get more idea visit https://expressjs.com/en/starter/hello-world.html

//to run the local server type nodemon ./index.js