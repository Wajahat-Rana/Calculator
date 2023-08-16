const express = require('express');

const app = express();

app.use('/static',express.static('static'));
app.get('/',(req,res)=>{
    res.status(200).sendFile(__dirname+'/index.html');
})

const port = 80;
app.listen(port,()=>{
    console.log("Listening At Port"+port);
})