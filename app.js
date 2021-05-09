
const
  express = require('express'),
  server = express(),
  port = process.env.PORT,
  classes =  [
    { id: 1, name: 'arabic' },
    { id: 2, name: 'english' }
  ],
  resource = '/api/classes'
  
server.use(express.json) 

// Show PORT ENV 
server.listen(port, () => { console.log(`listening on port ${port} ....`) })

////////////////////////////
// Get Method Requests
////////////////////////////
// Parent dir
server.get('/', (req, res) => {
  res.send('Node HTTP Module Hello World ')
})


// Get all classes
server.get(resource, (req, res) => {
  res.send(classes)
})

// Get a class by Id
server.get(`${resource}/:id`, (req, res) => {
  const id = parseInt(req.params.id),
    matchedClass = classes.find(c => c.id === id)
  if (matchedClass) res.send(matchedClass)
  else res.status(404).send('Not found')
})

////////////////////////////
// Post Method Requests
////////////////////////////
server.post(`${resource}`, (req, res) => {
  const newClass = {
    id: classes.length + 1,
    name : req.body.name
  }
  classes.push(newClass)
  res.send(newClass)
})

