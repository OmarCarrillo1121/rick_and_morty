const http = require ("http")
const data = require ("./utils/data")

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req
    if (url.includes("/rickandmorty/character")) {
        const id = req.url.split('/').at(-1)
        const searchCharById = data.find((char)=>{
           return char.id === +id
        })
        return res.writeHead (200, {"Content-type": "application/json"}).end(JSON.stringify(searchCharById))
    }
})
.listen(3001, "localhost")