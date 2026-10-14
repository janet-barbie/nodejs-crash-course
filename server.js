import http from 'http';
const PORT = process.env.PORT;
const server = http.createServer((req,res)=>{
    // res.write('Hello World!');
    // res.setHeader('Content-Type','text/html');
    // res.statusCode = 404;
    // res.end(JSON.stringify({message: 'server error'}));
    console.log(req.url)
    console.log(req.method)
    res.writeHead(200,{'content-type': 'text/html'})
    res.end("<h1> Hello world</h1>");

});
server.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})