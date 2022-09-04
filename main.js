const express = require("express");
const app = express();
const PORT = 8080;
const UserController = require("./score/rankingController")
const dotenv = require("dotenv/config")
const cors = require("cors")

app.use(cors())
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/", UserController)

app.get("/", (req,res)=>{{

    res.send("<hr> NOTHING HERE <hr>")
}})
app.get("/game", (req, res)=>{

    res.send("ok")

});


app.listen(PORT, ()=>{

    console.log("THIS SERVER IS ACTIVE")
})