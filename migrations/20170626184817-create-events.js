module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eventState: {
        type: Sequelize.STRING
      },
      eventDateTime: {
        type: Sequelize.DATE
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
    queryInterface.dropTable('events')
};