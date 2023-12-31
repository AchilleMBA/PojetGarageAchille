const { car } = require('../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../auth/auth')

module.exports = (app) => {
  app.post('/api/cars', auth, (req, res) => {
    car.create(req.body)
      .then(car => {
        const message = `La voiture ${req.body.name} a bien été crée.`
        res.json({ message, data: car })
      })
      .catch(error => {
        if(error instanceof ValidationError) {
          return res.status(400).json({ message: error.message, data: error });
        }
        if(error instanceof UniqueConstraintError) {
          return res.status(400).json({ message: 'error.message', data: error });
        }
        const message = `La voiture n'a pas pu être ajouté. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  })
}