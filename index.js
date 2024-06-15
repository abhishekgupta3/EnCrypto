const express    =  require('express');
const app        =  express();
const ejs        =  require("ejs");
const port       =  process.env.PORT || 8000;
const bodyParser =  require("body-parser");
const CryptoJS   =  require("crypto-js");

// default options
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
// res.header('Content-Security-Policy', "img-src 'self'");

// Get routes
app.get('/',(req,res)=>{
	res.render('home');
});
app.get('/about',(req,res)=>{
	res.render('about');
});

app.get('/encrypt',(req,res)=>{
	res.render('encrypt');
});

app.get('/decrypt',(req,res)=>{
	res.render('decrypt');
});

app.listen(port, function(){
});