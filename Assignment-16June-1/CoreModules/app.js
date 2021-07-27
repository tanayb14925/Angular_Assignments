// Core Modules http, url, queryString

 
// Step 1 : CREATING AND WRITING FILE USING 'fs' (asynchronously)

// var fs = require('fs');
// fs.writeFile('test.txt', 'Hello World of Node JS!', function (err) { 
//                         if (err)
//                                 console.log(err);
//                         else
//                                   console.log('Write operation successfully completed..!');
// });


//STEP 2: READ FILE USING 'fs'

// var fs = require('fs');
// var data = fs.readFileSync('test.txt', 'utf8');
// console.log(data);


// STEP 3 :  QUERYSTRING EXAMPLE 

// const querystring = require('querystring');
// const qs1 = querystring.parse('Employee_Name = Tanay & Organization = Mastek India LTD. ');
// console.log(qs1);

// querystring = require('querystring');  
// const qs2=querystring.stringify({Employee_Name:'Tanay',Organization:'Mastek India LTD. '});  
// console.log(qs2);  


// STEP 4 : HTTP 

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Hello World!');
//   res.end();
// }).listen(8080);

// console.log('http://localhost:8080/');

//