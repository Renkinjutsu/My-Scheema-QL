const io = require('./server.js').io

let getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = function(socket) {
  socket.on('input-update', data => {
    io.emit('state-update', data)
  })

  socket.on('create-table', data => {
    io.emit('new-table', data)
  })

  socket.on('table-change', data => {
    console.log("table data: ", data)
    io.emit('table-update', data)
  })

  socket.on('delete-row', data => {
    console.log("delete ", data)
    io.emit('row-delete', data)
  })

  socket.on('change-header', data => {
    console.log("delete ", data)
    io.emit('header-change', data)
  })

  socket.on('change-title', data => {
    console.log("delete ", data)
    io.emit('title-change', data)
  })

  socket.on('connection', data => {
    const color = ["yellow", "blue", "red", "purple", "green", "grey", "orange", "black", "gold"];
    const clientColor = {
      clientColor: color[getRandomInt(9)]
    }
    console.log("color ", clientColor)
    io.emit("set-client-color", clientColor)
  })
}

