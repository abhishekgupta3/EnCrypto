const express    =  require('express');
const app        =  express();
const ejs        =  require("ejs");
const port       =  process.env.PORT || 8000;
const bodyParser =  require("body-parser");
// const multer     =  require('multer'); 
const path       =  require("path");
const fs         =  require('fs');
const CryptoJS   =  require("crypto-js");

// default options
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',(req,res)=>{
	res.render('home');
});

app.get('/encrypt',(req,res)=>{
	res.render('encrypt');
});

app.get('/decrypt',(req,res)=>{
	res.render('decrypt');
});

// app.post("/FileUpload",function (req, res) {
//     console.log(req.body)
//     res.render('encrypt');
// });


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         // Uploads is the Upload_folder_name
//         cb(null, "uploads")
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + "-" + Date.now()+".pdf")
//     }
//  })

// // maximum size for uploading
// const maxSize = 1 * 1000 * 1000;
    
// const upload = multer({ 
//     storage: storage,
//     limits: { fileSize: maxSize },
//     fileFilter: function (req, file, cb){
    
//         // Set the filetypes, it is optional
//         const filetypes = /pdf/;
//         const mimetype = filetypes.test(file.mimetype);
  
//         const extname = filetypes.test(path.extname(
//                     file.originalname).toLowerCase());
        
//         if (mimetype && extname) {
//             return cb(null, true);
//         }
      
//         cb("Error: File upload only supports ' .pdf ' filetypes ");
//       } 
  
// }).single("myfile");     

// app.post("/FileUpload",function (req, res, next) {
        
//     // Error MiddleWare for multer file upload, so if any error occurs, the file would not be uploaded!
//     upload(req,res,function(err) {
  
//         if(err) {
//             // ERROR occured (due to uploading file of size 
//             // greater than 1MB or uploading different file type)
//             res.send(err)
//         }
//         else {
//             // SUCCESS, file successfully uploaded
//             res.send("Success, File uploaded!")
//         }
//     })
// })


app.listen(port, function(){
    console.log("Server listing at port...");
});