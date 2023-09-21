const { Sequelize, DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')
const carModel = require('../models/car')
const UserModel = require('../models/user')
const cars = require('./mock-car')

let sequelize

if(process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize('kk8u5y871hfoaw9y', 't09tvm6qofrtvc7h', 'ryujse9ftf40wpqn', {
    host: 'klbcedmmqp7w17ik.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mariadb',
    dialectOptions: {
      timezone: 'Etc/GMT-2',
    },
    logging: true
  })
} else {
  sequelize = new Sequelize('garage', 'username', 'password', {
    host: '192.168.64.2',
    dialect: 'mariadb',
    dialectOptions: {
      timezone: 'Etc/GMT-2',
    },
    logging: true
  })
  
}

const car = carModel(sequelize, DataTypes)
const User = UserModel(sequelize, DataTypes)

const initDb = () => {
  return sequelize.sync().then(_ => {
    cars.map(car => {
      car.create({
        name: car.name,
        hp: car.hp,
        cp: car.cp,
        picture: car.picture,
        type: car.type
      })
      .then(car => console.log(car.toJSON()))
    })

    bcrypt.hash('T@rantino1979', 10)
    .then(hash => User.create({ username: 'VPARROT', password: hash }))
    .then(user => console.log(user.toJSON()))

    console.log('La base de donnée a bien été initialisée !')
  })
}

module.exports = { 
  initDb, car, User
}