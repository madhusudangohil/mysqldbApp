module.exports = function(sequelize, DataTypes) {
  const complaints = sequelize.define('complaints', {
    address:{ 
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
        complaints.belongsTo(models.email, {
          foreignKey: 'emailId',
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return complaints;
};