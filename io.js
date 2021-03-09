const io = require("socket.io")

function IO(server) {

	const socket = io(server)

	socket.on("connection", client => {

		client.on("new_login", username => {

			client.broadcast.emit("new_user", username)
		})
	})
}

module.exports = IO
