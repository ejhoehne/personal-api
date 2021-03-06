var express= require('express');
var app= express();
app.use(express.bodyParser());
app.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});
var information= {
	name: [{"First":"Emily"}, {"Last":"Hoehne"}],
	location: [{"City":"Provo"}, {"State":"Utah"}],
	hobbies: ["Economics", "Yoga", "Cooking"],
	occupations: ["Assistant", "Receptionist", "Manager"],
	mentions:[{"Website":"http://www.facebook.com"}, {"Website":"http://www.twitter.com"}],
	friends:[{"Name":"Ann"}, {"Name":"Becca"}, {"Name":"Joe"}]
};
app.get('/name', function(req,res)
{
	res.type('text/plain');
	res.send(information.name);
});
app.get('/location', function(req,res){
	res.type('text/plain');
	res.send(information.location);

});
app.get('/hobbies', function(req,res){
	res.type('text/plain');
	res.send(information.hobbies);
	var order= req.query.order;
var sortedHobbies= information.hobbies.sort();
	if(order=='desc'){
		sortedHobbies= sortedHobbies.reverse();
	}
	res.send(sortedHobbies);
		
 });
app.get('/occupations', function(req,res){
	res.type('text/plain');
		res.send(information.occupations);
	var order= req.query.order;
	var sortedOccupations= information.occupations.sort();
	if (order=='desc'){
		sortedOccupations= sortedOccupations.reverse();
	}
	res.send(sortedOccupations);
		
 });
 app.get('/occupations/latest', function(req,res){
	res.type('text/plain');
	res.send(information.occupations[information.occupations.length-1]);

 });
 app.post('/mentions', function(req,res){
	var newPost= req.body;
	information.mentions.push(newPost);
	res.end();
 });
 app.get('/mentions', function(req,res){
	console.log('you posted!');
	res.send(information.mentions);
 });
 app.post('/friends', function(req,res){
	var newPost= req.body;
	information.friends.push(newPost);
	res.end();
 });
 app.get('/friends', function(req,res){
	console.log('you posted!');
	res.send(information.friends);
 });
 

app.listen(8080);
console.log('Listening on Port 8080');