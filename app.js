const express = require('express');
const app = express();
const port = 3000;

app.get('/',(red, res) => {
    res.send('Hello World');
});

app.listen(port, ()=>{
    console.log(`서버가 실행 됩니다. http://localhost:${port}`);
})