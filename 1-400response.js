const http = require('http');

const server = http.createServer((req,res) => {
    res.statusCode=400;
    res.end();
});

server.listen(3000, () => console.log('Server is running'))