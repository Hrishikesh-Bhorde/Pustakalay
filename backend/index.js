const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res)=>{
    res.send("Hellow !!")
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Kahitari Tutla!");
});


app.listen(3009, () => {
    console.log("Server Running on 3000 Port");
})