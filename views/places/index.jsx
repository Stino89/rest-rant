// GET /places
app.get('/', (req, res) => {
    res.render('places/index')
  })
  res.render('places/index', { places })
