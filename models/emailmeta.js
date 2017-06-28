module.exports = function(sequelize, DataTypes) {
  const emailMeta = sequelize.define('emailMeta', {
    key: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, 
  {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        emailMeta.belongsTo(models.email, {
          foreignKey: 'emailId',
          onDelete: 'CASCADE'
        });
      }
    }
  });
  return emailMeta;
};