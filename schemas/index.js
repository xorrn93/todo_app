const mongoose = require('mongoose');

const connect = () => {
    if(process.env.NODE_ENV !== 'production'){
        mongoose.set('debug',true);
    }
    mongoose.connect('mongodb://mongo1:mongo1@localhost:27017/admin',{
        dbName: 'todo',
        useNewUrlParser: true,
        useCreateIndex : true,
    }, (err) => {
        if(err) {
            console.log('mongoDB connect error!',err);
        }else {
            console.log('mongoDB connect complete!');
        }
    })
}

mongoose.connection.on('err',(err) => {
    console.error('mongoDB connect error!',err);
})

mongoose.connection.on('disconnected',() => {
    console.error('mongoDB connection failed, connection retry...');
    connect();
})

module.exports = connect;