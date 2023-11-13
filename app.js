const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const nunjucks = require('nunjucks');
var cors = require('cors');

const connect = require('./schemas');

app.use(express.static('public'))
app.use(cors())

app.set('view engine','html');
nunjucks.configure('views',{
    express : app,
    watch: true,
});
connect();
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/',indexRouter);
app.use('/users',usersRouter);

app.listen(port, ()=>{
    console.log(`서버가 실행 됩니다. http://localhost:${port}`); 
})

