// modules and globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()

//EXPRESS Settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

//Controllers & Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
  })
  
  //LISTENER
  const PORT = process.env.PORT || 3000

  app.listen(PORT, console.log(`listening on port ${PORT}`)) 














