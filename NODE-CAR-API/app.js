const express = require('express')
const morgan = require ('morgan')
const favicon =require('serve-favicon')
const bodyParser = require('body-parser')
const {success, getUniqueId} = require('./helper.js')
let cars = require('./mock-car')



const app = express()
const port = 3000


app
    .use(favicon(__dirname + '/favicon.ico'))   
    .use(morgan('dev'))
    .use(bodyParser.json())
    
    

app.get('/api/cars/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const car = cars.find(car => car.id === id)
    const message = 'Une voiture a bien été choisie.'
    res.json(success(message, car))
  })

app.get('/api/cars', (req, res)=>{
const message =' Voici la liste des voitures'
res.json(success(message, cars))
})

app.post('/api/cars', (req, res) => {
    const id = getUniqueId(cars)
    const carCreated = { ...req.body, ...{id: id, created: new Date()}}
    cars.push(carCreated)
    const message = `La voiture ${carCreated.name} est désormais dans le gararge.`
    res.json(success(message, carCreated))
  })
  
  app.put('/api/cars/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const carUpdated = { ...req.body, id: id }
    cars = cars.map(car => {
     return car.id === id ? carUpdated : car
    })
     
    const message = `Le vehicule ${carUpdated.name} a bien été modifié.`
    res.json(success(message, carUpdated))
   });

   app.delete('/api/cars/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const carDeleted = cars.find(car => car.id === id)
    cars = cars.filter(car => car.id !== id)
    const message = `Le véhicule ${carDeleted.name} a bien été supprimé.`
    res.json(success(message, carDeleted))
  });
    
  
app.listen(port, () => console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))