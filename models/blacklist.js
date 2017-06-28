module.exports = function(sequelize, DataTypes) {
  const blackList = sequelize.define('blackList', {
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    emailId:{
      type: DataTypes.INTEGER,
      allowNull: false      
    }    
  },
  {
    classMethods: {
       associate: (models) => {
        // associations can be defined here
        blackList.belongsTo(models.email, {
          foreignKey: 'emailId',
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return blackList;
};