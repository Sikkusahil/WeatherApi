const express=require('express');
const path=require('path');
const hbs=require('hbs');
const app=express();

const port= process.env.PORT || 3000;

//public static path;
const static_path= path.join(__dirname, "../public");
const template_path= path.join(__dirname, "../templates/views");
const partials_path= path.join(__dirname, "../templates/partials");

app.set('view engine','hbs');
app.set('views' ,template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

app.get("",(req,res)=>{
    res.render("index");
});


app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/weather",(req,res)=>{
    res.render("weather");
});

app.get("/registration",(req,res)=>{
    res.render("registration");
});

app.get("/log",(req,res)=>{
    res.render("log");
});

app.get("*",(req,res)=>{
    res.render("404error", {
        errorMsg:"OPPS! page not found"
    });
});



app.listen(port,()=>{
    console.log("final ended");
});