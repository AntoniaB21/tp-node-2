const http = require('http');
const url = require('url');

const schema = {
    message :'hello world',
    status : '200',
};

const server = http.createServer((req,res) => {
    const queryObject = url.parse(req.url,true).query;
    console.log(queryObject.message);
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify({message:queryObject.message}));
});



server.listen(3000, () => console.log('Server is running'))