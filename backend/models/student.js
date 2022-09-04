const { Model, DataTypes } = require('sequelize');

class Student extends Model {
  static init(sequelize) {
    super.init({
      ra: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      cpf: DataTypes.STRING
    }, {
      sequelize,
      timestamps: false
    })
  }

  static associate(/*models*/) {}
}

module.exports = Student;