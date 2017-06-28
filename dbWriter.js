const email = require('./models').email;
const event = require('./models').events;
const blacklist = require('./models').blackList;
const bounces = require('./models').bounces;


function createEvent(id, state, dateTime){
   
    return event.create({
            eventState: state,
            eventDateTime: dateTime,
            emailId: id
        });
}

module.exports = {
    writeEmail: function(message, callback){
        email.findOne({where:{emailKey: message.id}})
        .then(e => {
            if(e){
                createEvent(e.id, message.state, message.dateTime)
                .then(e=>{console.log(e)})
                .catch(e=>{console.log(e)});
            }
            else{
                email.create({
                    emailKey: message.id
                })
                .then(k=> {                   
                   createEvent(k.id, message.state, message.dateTime)
                    .then(e=>{console.log(e)})
                    .catch(e=>{console.log(e)});
                })
                .catch(e=>{callback(e)});
            }
        })
        .catch(e=>{callback(e)});        
    },
    writeBlackList: function (address, callback) {
        blacklist.bulkCreate(address)
        .then(b=> {console.log(b)})
        .catch(b=> {console.log(b)});
    },
    writeBounces: function (bounces, callback) {
        blacklist.bulkCreate(bounces)
        .then(b=> {console.log(b)})
        .catch(b=> {console.log(b)});
    },
    writeEvent: function(key, state, datetime,callback){        
        email.find({
            where: {
                emailKey: key
            }
        })
        .then(k=>{          
            event.create({                
                eventState: state,
                eventDateTime: datetime,
                emailId: k.id
	        })
            .then(e=> {
                console.log(e); 
                callback(null, e);})
            .catch(e=> {
                console.log(e);  
                callback(e);});
        })
        .catch(error=>callback(error));
    }

}

