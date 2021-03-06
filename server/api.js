const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');

const port = 5000;

app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded())
    .use(cors())
    .get('/', (req, res)=>{
        res.send('it api !')
    })
    .get('/user', (req, res)=>{
        const users = [{
            name: "Frame",
            age: 20
        }, {
            name: "Mind",
            age: 23
        }, {
            name: "Pae",
            age: 23
        }, {
            name: "Kong",
            age: 35
        }]

        res.json({users})
    })
    .post('/user', (req, res)=>{
        const users = req.body.user;
        console.log(req.body)

        res.json({ users });
    })
    .listen(port, ()=>console.log(`> App on port ${port}`));
