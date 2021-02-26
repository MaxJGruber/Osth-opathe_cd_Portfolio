const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const cors = require("cors");

const app = express()

const cloudinaryRouter = require("./src/cloudinaryConfig")

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
})

const corsOptions = { origin:"http://localhost:8081", credentials: true};
app.use(cors(corsOptions));
//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))
app.use("/", cloudinaryRouter)
// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
	res.sendFile(path.join(__dirname, '/dist/index.html'))
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: ${port}`)