const helper = require('./dbWriter.js');
/*
helper.writeEmail({id:'refactor10', state:'new', dateTime: new Date()}, function(err, res){
    console.log(res);
});*/


/*helper.addEvent('mgTest', 'Test', new Date() , function(err, res){
    console.log('executed');
    console.log(res);
});
*/

let address = [];

address.push({emailId: 2, address: 'a@b.com' });
address.push({emailId: 2, address: 'c@b.com' });
address.push({emailId: 2, address: 'd@b.com' });
address.push({emailId: 2, address: 'e@b.com' });


helper.writeBlackList(address, function(err, res){
    console.log(res);
});