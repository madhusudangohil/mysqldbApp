module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.createTable('bounces', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      subType: {
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
    queryInterface.dropTable('bounces')
};