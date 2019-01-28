let express = require("express");
let app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));



app.get("/", (req, res) =>{
    res.render("pages/index")
})

app.get("/seating", (req, res) =>{
    res.render("pages/seating")
})

app.get("/storage", (req, res) =>{
    res.render("pages/storage")
})

app.get("/table", (req, res) =>{
    res.render("pages/table")
})

app.listen(3000, function(){
    console.log(`Server is running on port 3000`);
});