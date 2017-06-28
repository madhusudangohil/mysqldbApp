module.exports = function(sequelize, DataTypes) {
  const events = sequelize.define('events', {
    eventState:{
      type: DataTypes.STRING,
      allowNull: false
    },
    eventDateTime:{ 
      type: DataTypes.DATE,
      allowNull: false
    },
    emailId:{
      type: DataTypes.INTEGER,
      allowNull: false      
    }    
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        events.belongsTo(models.email, {
          foreignKey: 'emailId',
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return events;
};