module.exports = function(sequelize, DataTypes) {
  const email = sequelize.define('email', {
    emailKey:
    {
       type: DataTypes.STRING,
       allowNull: false
    }
  }, {
    classMethods: {
      associate: models => {
        // associations can be defined here
        email.hasMany(models.events, {
          foreignKey: 'emailId',
          as: 'emailEvents'
        });

        email.hasMany(models.bounces, {
          foreignKey: 'emailId',
          as: 'emailBounces'
        });

        email.hasMany(models.complaints, {
          foreignKey: 'emailId',
          as: 'emailComplaints'
        });

        email.hasMany(models.emailmeta, {
          foreignKey: 'emailId',
          as: 'emailMetaData'
        });

        email.hasMany(models.blacklist, {
          foreignKey: 'emailId',
          as: 'emailBlackList'
        });
      }
    }
  });
  return email;
};