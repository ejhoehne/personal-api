var express= require('express');
var app= express();
app.use(express.bodyParser());
app.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});
app.get('/name', function(req,res)
{
	res.type('json');
  	res.json({name:'Emily Hoehne'}); 
});
app.get('/location', function(req,res){
	res.type('json');
  	res.json({location:'Provo, Utah'}); 

});
app.get('/hobbies', function(req,res){
	res.type('json');
	//res.json({"obj":[{"name":"tt"},{"name":"gg"}]}); 
  	res.json({"hobbies":['Economics', 'Gluten-free', 'Flute', 'Yoga']});
  		
});
app.get('/occupations', function(req,res){
	res.type('json');
  	res.json({occupations:['Office Manager', 'Receptionist', 'Admin Assistant']}); 
});
app.get('/occupations/latest', function(req,res){
	res.type('json');
	res.json({Latest:'Office Manager'}); 

});

app.listen(8080);
console.log('Listening on Port 8080');