http = require('http');
http.createServer((req, res) => {
    if(req.url.includes('customers')){
        var customers = [{"id":1,"name":"paras"},{"id":2,"name":"nurender"}];
        res.write(JSON.stringify(customers));
        res.end();
        return;   
    }
    res.write('hello');
    res.end();
}).listen(2900);