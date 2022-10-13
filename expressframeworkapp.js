//express is just a web framwork for nodejs
const express = require('express');
const app = express();

app.get('/',(req,res)=> {
    res.send('Hello World');
});

app.listen(3000);

app.get('/example',(req,res) => {
    res.send('hitting example route');
}); 

//route parameter
app.get('/example/:name/:age',(req,res)=>{
    console.log(req.params);
    //query string parameters
    console.log(req.query);
    res.send(req.params.name + " : " + req.params.age );
});

//route parameters should be used when you must have that data, absolute must
//query string paramater for optional things 
