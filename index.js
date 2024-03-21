// modules and globals
require('dotenv').config()
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const express = require('express')
const app = express()

//middleware
app.use(methodOverride('_method'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


// Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
  res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
  })
  
  //db connection
  mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('DB connection successful'))
  .catch(err => console.log(err));

  const PORT = process.env.PORT || 3000

  app.listen(process.env.PORT)














