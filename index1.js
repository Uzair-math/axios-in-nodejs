const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios');
const body = require('body-parser')
const PORT = 3000;
app.use(express.json())


app.use(express.static('public'))
app.use(body.json())
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})
app.get('/datas', (req, res) => {
    const data = { name: "Muhammad Uzair", email: "uzair@gmail.com", password: "123" };
    console.log(data, 'hello');
    res.json(data);
});

app.post("/signup", (req, res) => {
    var { name, email, password } = req.body;
    console.log(req.body);
    res.json(req.body);
});

app.listen(PORT, (err)=>{
    if (err) {
        console.log("Error");
    }
    else{
        console.log("connect");
    }
})