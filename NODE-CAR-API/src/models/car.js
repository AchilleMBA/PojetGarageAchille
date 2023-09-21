
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Car', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {   
        msg: 'Le nom est déjà pris.'
    },
    validate: {
      len: {
        args: [1, 25],
        msg: 'Le nom doit contenir entre 1 et 25 caractères.'
      },
      notEmpty: { msg: 'Le nom ne peut pas être vide.' },
      notNull: { msg: 'Le nom est une propriété requise.'}
    }
  },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: { msg: 'Utilisez uniquement des nombres entiers.' },
        min: {
          args: [1900],
        msg: 'La date la plus ancienne 1900.'
        },
        max: {
          args: [2023],
          msg: 'La date doit être celle en cours.'
        },
        notNull: { msg: 'Une date est obligatoire.'}
      }
      
    },

    type: {
      type: DataTypes.STRING,
      allowNull: false
    },

    km: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: { msg: 'Utilisez uniquement des nombres entiers.' },
        min: {
          args: [1],
        msg: 'La date la plus ancienne 1900.'
        },
        max: {
          args: [400000],
          msg: 'Ne peux exceder 400000 km.'
        },
        notNull: { msg: 'ce champs est obligatoire.'}
      }
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isInt: { msg: 'Utilisez uniquement des nombres entiers.' },
        min: {
          args: [0],
          msg: 'Le prix doit être supérieurs ou égales à 0.'
        },
        max: {
          args: [999999],
          msg: 'Le prix doit être inférieures ou égales à 999999.'
        },
        notNull: { msg: 'Un prix est requis.'}
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 25],
          msg: 'La categorie doit contenir entre 1 et 25 caractères.'
        },
        notEmpty: { msg: 'La categorie ne peut pas être vide.' },
        notNull: { msg: 'La categorie est une propriété requise.'}
      }
    }
  }, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: false
  })
}