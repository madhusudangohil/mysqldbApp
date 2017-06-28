module.exports = {
  up: (queryInterface, Sequelize) =>
     queryInterface.createTable('blackLists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address: {
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
    queryInterface.dropTable('blackLists')
};