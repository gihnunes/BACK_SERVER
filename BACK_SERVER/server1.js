// 19/04 - criando o primeiro servidor web usando node

const http =require('https');

const server =http.createServer((req,res)=>{
    console.log("efetuando pedido!\n");
    //declarando um header
    resizeBy.setHeader('const-type','text/html');
    res.write("<h1>o que você quer? seu mala!</h1>");
    res.write("<h2>dormir</h2>");
    res.write("<h3>cafezinho</h3>");
    res.end();
})

server.listen(3000,'localhost',()=>{
    console.log('servidor no ar!!');
})