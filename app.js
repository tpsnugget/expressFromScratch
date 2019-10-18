var express = require("express")
var app = express()

app.set("view engine", "ejs")

// =============================================================================
// ROUTES
// =============================================================================
app.get("/", (req, res) => {
   res.redirect("/landing")
})

app.get("/landing", (req, res) => {
   res.render("landing")
})

app.get("/index", (req, res) => {
   res.render("index")
})
// =============================================================================
// ROUTES
// =============================================================================

app.listen(3000, process.env.IP, () => {
   console.log("The Server is running...")
})