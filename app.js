const express = require('express');
const app = express();
const port = 3000;

app.get('/',(red, res) => {
    res.sendFile(__dirname + "/public/main.html")
});

app.get('/main',(red, res) => {
    res.sendFile(__dirname + "/public/main.html")
})
app.use(express.static('public'))

app.listen(port, ()=>{
    console.log(`서버가 실행 됩니다. http://localhost:${port}`);
})