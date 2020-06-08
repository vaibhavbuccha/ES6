const http = require('http');


http.createServer((req,res)=>{
	res.writeHead(200 , {'Content-Type': 'text/html'});
	console.log('server is up and running');
	res.write('Hello form server  '+ req.url + '<br>');
	if(req.url == '/home'){
		res.write('you are on home <br>');
	}else if(req.url == '/product'){
		res.write('you are on product <br>');
	}
	else if(req.url == '/users'){
		res.write('you are on user <br>');
	}else{
		res.write('you are at somewhere on this planet <br>');
	}
	console.dir(req);
	res.end("bye from server");
}).listen(8000)

