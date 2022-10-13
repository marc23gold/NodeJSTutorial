const express = require('express');
const path = require('path');  
const app = express();
//app.use means you're using middleware
//1st param: alias, 2nd param: argument for middleware
app.use('./public', express.static(path.join(__dirname),'static'));
app.use(express.urlencoded({extended: false}));

app.get('./',(req,res)=> {
    res.sendFile(path.join__dirname, 'static', 'index.html');
})

app.listen(3000);

app.post('/',(req,res)=>{
    console.log(req.express)
    //database work here
    res.send('Sucessfully posted data');
});