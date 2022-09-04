const { Model, DataTypes } = require('sequelize');

class Student extends Model {
  static init(sequelize) {
    super.init({
      ra: DataTypes.INTEGER,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      cpf: DataTypes.STRING
    }, {
      sequelize,
      tableName: 'addresses',
      timestamps: false
    })
  }

  static associate(/*models*/) {}
}

module.exports = Student;