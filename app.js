const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors');

app.use(express.static('public'))
app.use(cors())


app.get('/',(req, res) => {
    res.sendFile(__dirname + "/public/main.html")
});

app.get('/main',(req, res) => {
    res.sendFile(__dirname + "/public/main.html")
})

app.use(express.json());
app.use(express.urlencoded({extended: false}))

// add 
app.post('/add',(req, res) =>{
    console.log(req.body);
})
// delete
app.get('/delete',(req, res)=>{

})
// check
app.get('/check',(req, res) =>{

})

// all delete
app.get('/alldelete',(req, res) =>{
    
})



app.listen(port, ()=>{
    console.log(`서버가 실행 됩니다. http://localhost:${port}`);
})