const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 8000;
const bodyParser = require("body-parser");
const CryptoJS = require("crypto-js");

// default options
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Get routes
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/encrypt', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', 'encrypt.html'));
});

app.get('/decrypt', (req, res) => {
	res.sendFile(path.join(__dirname, 'views', 'decrypt.html'));
});

app.listen(port, function () {
	console.log(`Server is running on http://localhost:${port}`);
});