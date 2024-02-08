const express = require ('express')
const cors = require('cors')
const catController = require('./Controllers/CatControllers.js')
const dogController = require('./Controllers/DogControllers.js')
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('welcome to my page')
})

// app.get('/dogs', (req, res) => {
//     res.send({
//         favoriteDog: "toy poddle"
//     })
// })

// app.get('/cats/:catName', (req, res) => {
//     res.send(`My cats name was ${req.params.catName}`)
// })


app.get('/towns', (req, res) => {
    res.send('this is a Get route, Im from Los Angeles')
})

app.post('/towns', (req, res) => {
    res.send('Im from Los Angeles, California')
})


app.get('/profile/:username', (req, res)=> {
    res.send(`viewing ${req.params.username}'s profile`)
  })

app.put('/profile/update/:username', (req, res) => {
    res.send(`updating ${req.params.username}'s profile`)
})

app.delete('/tacos', (req, res) => {
    res.send(`deleted Taco with id of ${req.query.id} and a type of ${req.query.type}`)
  })

  app.get('/middleware', (req, res, next) => {
    console.log('this is middleware')
    next()
  },
  (req, res) => {
    res.send('response completed')
  })

  app.get('/cats', catController.getCats)

  app.get('/cats/:id', catController.getCatById)

  app.get('/dogs', dogController.getDogs)

  app.get('/dogs/:name', dogController.getDogByName)