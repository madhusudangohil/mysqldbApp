module.exports = function(sequelize, DataTypes) {
  const bounces = sequelize.define('bounces', {
    address:{ 
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type:DataTypes.STRING,
      allowNull: false
    },
    subType: {
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
        bounces.belongsTo(models.email, {
          foreignKey: 'emailId',
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return bounces;
};