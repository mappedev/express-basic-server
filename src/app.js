const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const PORT = 7000
const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs') // * Es necesario indicarle el motor con el que se construyen las vistas
app.set('views', viewsPath) // * Es necesario indicarle la carpeta que contiene las vistas en caso de que esta no se llame "views"
hbs.registerPartials(partialsPath)

app.use(express.static(publicPath))

app.get('/', (_, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Mario Peña'
  })
})

app.get('/about', (_, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Mario Peña'
  })
})

app.get('/weather', (_, res) => {
  res.send({
    forecast: "It's snowing",
    location: 'Philadelphia'
  })
})

app.get('/help', (_, res) => {
  res.render('help', {
    title: 'Help',
    name: 'Mario Peña',
    text: 'This is the help page.'
  })
})

app.get('/datongo', (_, res) => {
  res.json({ data: true })
})

app.listen(PORT, () => {
  console.log(`Server is up on http://localhost:${PORT}`)
})