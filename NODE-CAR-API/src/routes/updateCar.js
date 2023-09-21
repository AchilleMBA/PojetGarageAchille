const { car } = require('../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../auth/auth')

module.exports = (app) => {
  app.put('/api/cars/:id', auth, (req, res) => {
    const id = req.params.id
    car.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      return car.findByPk(id).then(car => {
        if(car === null) {
          const message = `La voiture demandé n'existe pas. Réessayez avec un autre identifiant.`
          return res.status(404).json({ message })
        }

        const message = `La voiture ${car.name} a bien été modifié.`
        res.json({message, data: car })
      })
    })
    .catch(error => {
      if(error instanceof ValidationError) {
        return res.status(400).json({ message: error.message, data: error });
      }
      if(error instanceof UniqueConstraintError) {
        return res.status(400).json({ message: 'error.message', data: error });
      }
      const message = `La voiture n'a pas pu être modifié. Réessayez dans quelques instants.`
      res.status(500).json({ message, data: error })
    })
  })
}