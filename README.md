"# mysqldbApp" 
1) npm install -g sequelize-cli
2) create .sequelizerc file to initialize sequelize
3) npm install sequelize --save
4) sequelize init (note this generates folders for config, migrations, seeder and models)
5) Refactor index.js file in models for ES6 specification, convert var to const and let.
6) run following commands
    sequelize model:create --name email --attributes emailKey:string
    sequelize model:create --name events --attributes eventState:string,eventDateTime:Date
    sequelize model:create --name complaints --attributes address:string
    sequelize model:create --name bounces --attributes address:string,type:string, subType:string
    sequelize model:create --name blackList --attributes address:string
    sequelize model:create --name emailMeta --attributes key:string,value:string
7) Refactor the models generated by sequelize command line, change var to const, add constraints to the attributes, and using lambda instead of function and return.
8) run command sequelize db:migrate
9) To rever
    a) run command sequelize db:migrate:undo to revert the last command.
    b) run command sequelize db:migrate:undo:all


https://www.npmjs.com/package/sequelize-cli
https://www.youtube.com/watch?v=gwrfXtC-y3k
https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize
https://github.com/sequelize/cli

