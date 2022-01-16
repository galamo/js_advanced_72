const express = require("express")
const app = express();

const talsFruits = ["coconut", "orange", "mango", "peanaple"]

app.get("/fruits", (req, res, next) => {
    console.log(`request ${new Date().toUTCString()} arrived`)
    res.json(talsFruits)
})

app.get("/fruit/:fruit", (req, res, next) => {
    console.log(req.params)
    talsFruits.push(req.params.fruit)
    res.json({ message: "success!" })
})
app.listen(3500)