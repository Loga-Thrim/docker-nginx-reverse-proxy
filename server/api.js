const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = 5000;

app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded())
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
        const users = req.body;

        res.json({ users });
    })
    .listen(port, ()=>console.log(`> App on port ${port}`));