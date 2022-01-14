const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors('*'))
app.use(express.json())

// add the routers
const routerCategory = require('./routes/category')
app.use('/category', routerCategory)

app.use('/', (request, response) => {
  response.send('welcome to category service')
})

app.listen(4000, '0.0.0.0', () => {
  console.log('category-server started on port 4000')
})
