const express = require("express")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const user = require("./routes/userRoute");
// const product = require('./routes/Products') 
const category = require('./routes/Categories')
const order = require('./routes/Order')
const cart = require('./routes/Cart')
const products = require('./routes/ProductRoutes')
const brand = require('./routes/Brands')
const connectDatabase = require("./config/db")
dotenv.config()
connectDatabase()
// const cluster = require('./cluster')
// import cluster from "cluster";
// import os from "os";
// import { dirname } from "path";
// import { fileURLToPath } from "url";
const cluster = require("cluster");
const os = require("os");

const numCpus = os.cpus().length;

console.log('the number of cpus is ' + numCpus)
if(cluster.isMaster){
    for (let i=0 ;i<numCpus;i++){
        console.log(`process id ${process.pid}`)
        cluster.fork()
}
} else {
    console.log(`process id ${process.pid}`)
    const callback = (req, res) => {
        if(req.url === '/'){
            res.write(`ecommerce project.\n${process.pid}` )
        } else if(req.url === '/login'){
            for (let i=0 ; i<10000000 ; i++){

            }
            res.write(`this is login page \n. ${process.pid}`)
        } else {
            res.write(`no page found \n. ${process.pid}`)
        }
        res.end(`Request url: ${req.url}`)
    }
    const app = express(callback);
    app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1", user);
// app.use('/api/v1',product)
app.use('/api/v1',category)
app.use('/api/v1',order)
app.use('/api/v1',cart)
app.use('/api/v1', products)
app.use('api/v1', brand)

const port = process.env.PORT || 7000

app.listen(port,() => {
    console.log(`server is runing on port ${port}`)
})
}
// const server = http.createServer(callback);













