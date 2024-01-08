const {Sequelize,DataTypes,Model} = require('sequelize');
const sequelize = new Sequelize('book_store','root','123456',
{
    host:'localhost',
    dialect:'mysql'
}
);
const Book = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement:true
    },
    tittle: {
        type: DataTypes.STRING,
        allowNull:false
    },
    quantity:{
        type: DataTypes.BIGINT,
        allowNull:false
    }
  });
