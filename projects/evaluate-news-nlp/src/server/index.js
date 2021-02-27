//environment variables for the api key
const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const app = express();
const api_key = process.env.API_KEY;
app.use(express.static('dist'))
console.log("hellowworld");
console.log(`Your API key is ${process.env.API_KEY}`);
console.log(__dirname)
//adding meaning cloud api key 
//var textapi = new meaningCloud({
	//application_id : "your-api-id",
	//application_key: process.env.API_KEY
	
//});
//console.log(`Your API key is iiiiiii ${process.env.API_KEY}`);

//global variables

const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?";


app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post("/postUrl", retrieveData);
function retrieveData (req,res){
	let request = req.body;
	let inputValue = request.userInput;
	console.log("inputValue is " + inputValue);
	let response = fetch((baseUrl+'key='+api_key+'&of=json&model=general&lang=en&txt='+inputValue), {
		method: POST,
		credentials: 'same-origin',
		headers: {
			'Content-Type':'application/json',
		},
		body: JSON.stringify({}),
	});
	try {
      const newData = response.json();
	  console.log("returned data" + newData);
      return newData;
    }catch(error) {
    console.log("error", error);
    }
 };
 