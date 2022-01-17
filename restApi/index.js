const express = require("express")
const cors = require("cors")
const app = express();

const talsFruits = ["coconut", "orange", "mango", "peanaple"]
app.use(cors)
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


app.listen(3200)