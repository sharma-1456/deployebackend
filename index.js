require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req, res)=>{
    res.send("hello vishal")
})
app.get('/youtube', (req, res)=>{
  res.send("hello chai aur code")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})