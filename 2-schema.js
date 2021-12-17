const http = require('http');

const schema = {
    message :'hello world',
    status : '200',
};

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify(schema));
});

server.listen(3000, () => console.log('Server is running'))