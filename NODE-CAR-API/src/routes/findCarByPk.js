const { car } = require('../db/sequelize')
const auth = require('../auth/auth')

module.exports = (app) => {
  app.get('/api/cars/:id', auth, (req, res) => {
    car.findByPk(req.params.id)
      .then(car => {
        if(car === null) {
          const message = `La voiture demandé n'existe pas. Réessayez avec un autre identifiant.`
          return res.status(404).json({ message })
        }

        const message = 'La voiture a bien été trouvé.'
        res.json({ message, data: car })
      })
      .catch(error => {
        const message = `La voiture n'a pas pu être récupéré. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  })
}