const express = require('express')
const path =require('path')
const app = express()
const port = process.env.PORT || 3000 //process.env.port for heroku
app.use(express.static(__dirname + '/dist/ngproject'));//gets content like jscript an dother from ngproject 

//app.get('/', (req, res) => res.send('Hello World!'))
app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/dist/ngproject/index.html')))//backend route

app.listen(port, () => console.log(`Example app listening on port ${port}!`))