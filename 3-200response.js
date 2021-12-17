const http = require('http');

const repsonse = {
    firstName :'Antonia',
    lastName :'Balluais',
    birthdate: '29/03/1995',
    color: 'noir',
};

const server = http.createServer((req,res) => {
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    res.end(JSON.stringify(repsonse));
});

server.listen(3000, () => console.log('Server is running'))