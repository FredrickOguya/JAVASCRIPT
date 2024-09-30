const http = require('http')

const server = http.createServer((request, response) => {
     if(request.url === '/'){
        response.writeHead(200,{'Content-Type' : 'text/plain'})
        response.end('Welcome to the about us page')
     }else if(response.url === '/about'){
        response.writeHead(200, {'Conten-Type' : 'text/plain'})
        response.end('Welcome to about')
     }else{
        response.writeHead(404, {'Content-Type' : 'text/plain'})
        response.end('Page not found.')
     }
   
})

const PORT = 3000;

server.listen(PORT, () => {
    console.log('Server is running')
})