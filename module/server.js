const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    let path = "./views"
    if (req.url === "/") {
        path = path + "/index.html"
    } else if (req.url === "/contact") {
        path = path + "/contact.html"
    } else if (req.url === "/about") {
        path = path + "/about.html"
    } else if (req.url !== "/contact" || "/about" || "") {
        path = path + "/error.html"
    }

    fs.readFile(path, (err, data) => {
        if (err) return;
        res.writeHead (200, {"Content-Type": "text/html"});
        res.write(data);
    })
})

server.listen (3000)
console.log("Listening on Port 3000...")