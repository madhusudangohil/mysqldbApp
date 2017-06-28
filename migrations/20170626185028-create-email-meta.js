module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('emailMeta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      key: {
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      emailId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model:'emails',
          key: 'id',
          as: 'emailId'
        }
      }
    }),
  down: (queryInterface, Sequelize) =>
    queryInterface.dropTable('emailMeta')
};