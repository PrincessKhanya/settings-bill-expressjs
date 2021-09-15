const express=require("express");

const app = express();

app.get("/", function (req, res){
    res.send("Setting-Bill App1")

})

const PORT = process.env.PORT|| 3011

app.listen(PORT,function(){
    console.log("App started at port:", PORT)
});