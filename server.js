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
	occupations: ["Assistant", "Receptionist", "Manager"]
}
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
 });
app.get('/occupations', function(req,res){
	res.type('text/plain');
  	res.send(information.occupations);
 });
 app.get('/occupations/latest', function(req,res){
 	res.type('text/plain');
 	res.send(information.occupations[information.occupations.length-1]);

 });

app.listen(8080);
console.log('Listening on Port 8080');