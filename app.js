
const
  express = require('express'),
  server = express(),
  port = process.env.PORT
  
  
server.get('/', (req, res) => {
  res.send('Node HTTP Module Hello World ')
})
server.get('/api/classes', (req, res) => {
  res.send(
    [
      { id: 1, name: 'arabic' },
      { id: 2, name: 'english' }
    ]
  )
})
// Route Parameters
// server.get('/api/classes/:id/:name', (req, res) => {
//   res.send(req.params)
// })

// Query string parameters
server.get('/api/classes/:id/:name', (req, res) => {
  res.send(req.query)
})

server.listen(port, () => { console.log(`listening on port ${port} ....`) })
console.log('Listen to server')

