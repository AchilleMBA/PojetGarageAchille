const { car } = require('../db/sequelize')
const auth = require('../auth/auth')

module.exports = (app) => {
  app.delete('/api/cars/:id', auth, (req, res) => {
    car.findByPk(req.params.id)
      .then(car => {        
        if(car === null) {
          const message = `Le car demandé n'existe pas. Réessayez avec un autre identifiant.`
          return res.status(404).json({ message })
        }

        return car.destroy({ where: { id: car.id } })
        .then(_ => {
          const message = `Le car avec l'identifiant n°${car.id} a bien été supprimé.`
          res.json({message, data: car })
        })
      })
      .catch(error => {
        const message = `Le car n'a pas pu être supprimé. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
  })
}