const express = require("express")
const app = express();
var cors = require('cors')
var bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



const talsFruits = ["coconut", "orange", "mango", "peanaple"]
let num = 0;

app.get("/status", (req, res, next) => {
    num++;
    if (num % 2 === 0) {
        return res.send(`you are Hero`)
    } else {
        return res.send(`you are Zero`)
    }
})

app.get("/fruits", (req, res, next) => {
    console.log(`request ${new Date().toUTCString()} arrived`)
    res.json(talsFruits)
})

app.get("/fruit/:fruit", (req, res, next) => {
    console.log(req.params)
    talsFruits.push(req.params.fruit)
    res.json({ message: "success!" })
})
app.post("/fruit", (req, res, next) => {
    console.log(req.body)
    talsFruits.push(req.body.fruit)
    res.json({ message: "POST request Fruit created" })
})


app.listen(3200)