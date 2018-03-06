/**
 * Socket.io configuration
 */

'use strict'

module.exports = function (io) {
	// socket.io (v1.x.x) is powered by debug.
	// In order to see all the debug output, set DEBUG (in server/config/local.env.js) to including the desired scope.
	//
	// ex: DEBUG: "http*,socket.io:socket"

	// We can authenticate socket.io users and access their token through socket.decoded_token
	//
	// 1. You will need to send the token in `client/components/socket/socket.service.js`
	//
	// 2. Require authentication here:
	// io.use(require('socketio-jwt').authorize({
	//   secret: config.secrets.session,
	//   handshake: true
	// }));

	io.on('connection', function (socket) {

		// Call onDisconnect.
		socket.on('disconnect', () => {
			console.log('DISCONNECTED')
		})

		// Insert sockets below
		socket.on('chat message', function (msg) {
			io.emit('chat message', msg)
		})


		console.log('CONNECTED')

	})
}
