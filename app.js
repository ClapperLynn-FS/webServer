let fs = require("fs");
let http = require("http");
let path = require("path");
let url = require("url");


http.createServer(function(req,res){

    let parsed = url.parse(req.url);
    let filename = path.parse(parsed.pathname);
    let filen="";
    
    if(filename.name == ""){
        filen = index.html;
    }
    else{
        filen = filename.name;
    }
    filen = filename.name;

    fs.readFile(filen+".html",function(err,data){
        
        res.writeHead(200);
        res.write("<script></script>");
        res.end(data);

    })
    
}).listen("8080")