const express = require("express");
const app = express();
const path = require("path");

const port = 5000;

app
    .get('*', (req, res)=>{
        res.sendFile(path.join(__dirname + '/../view/profile.html'));
    })
    .listen(port, ()=>console.log(`> App on port ${port}`));