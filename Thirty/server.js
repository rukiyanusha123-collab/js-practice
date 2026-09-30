const http=require("http")

const server=http.createServer((req,res)=>{
    res.write("Welcome!!")
    res.end()
})
server.listen(4000,()=>{
    console.log("server is running on http://localhost:4000")
})