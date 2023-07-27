const http=require('http')
const server=http.createServer((req/*incoming request*/,res)=>{
    if(req.url=='/'){
        res.end('welcome to the home page')
    }else if(req.url==='/about'){
        res.end('welcome to the home page of about')
    }
    else{
    res.end(`
      <h1>OOPS!!</h1>
      <p>we cant find the page u are looking for</p>
      <a href="/">backhome</a> `
       )
    }
})
server.listen(5000)