

const express = require("express");
const bodyParser = require("body-parser");
// const popup = require("popups");
const app = express();

let items=["IIT JAM","TIFR"];
let workItems=[];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static("public"));

app.get("/", function (req, res) {

    var today = new Date();
    var options = {
    weekday: "long",
    day: "numeric",
    month: "long"

};
var day= today.toLocaleDateString("en-US",options);



    res.render("list", {listTitle : day, newListItem: items });
});

app.post("/",function(req,res){
    

    
    var item=req.body.newItem;
     
            if(req.body.list === "Work"){

        workItems.push(item);
        res.redirect("/Work");
    }else{
        // if(item === ""){
        //     let alert =require('alert');
        //     alert("Please Enter Item");
        // } 
        // else{
        items.push(item);
        res.redirect("/");
        }
  

    
});
app.get("/Work",function(req,res){

    res.render("list",{listTitle: "Work List",newListItem: workItems});


});



// app.post("/work",function(req,res){
//     let item=req.body.newItem;
//     workItems.push(item);
//     res.redirect("/work");
// })
app.listen(3000, function () {
    console.log("Server started on port 3000");
});