const express = require("express")
const http = require("http")
const app = express()
const { fetchAll } = require("./pg")

const server = http.createServer(app)

const io = require("./io")(server)

const PORT = process.env.PORT || 4050

app.use((_, res, next) => {

	res.set("Access-Control-Allow-Origin", "*")

	next()
})

app.get("/users", async (_, res) => {

	res.send(await fetchAll(`select id, username, languages from users`))
})

server.listen(PORT, () => console.log('*:' + PORT))
