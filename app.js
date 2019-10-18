var express = require("express")
var app = express()

app.get("/", (req, res) => {
   res.send("This is the root")
})

app.listen(3000, process.env.IP, () => {
   console.log("The Server is running...")
})