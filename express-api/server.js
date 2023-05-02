require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const gameRoutes = require('./routes/games')

//Express app
const app = express();

//Middleware
app.use(express.json());

//Log requests to console
app.use((req, res, next) =>{
    console.log(req.path, req.method);
    next();
});

//Routes
app.use('/api/games', gameRoutes);

//Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //Listen for requests
        const port = process.env.PORT || 4000;
        app.listen(port, ()=>console.log(`connected to DB and listening on port ${port}`));
    })
    .catch((error) =>{
        console.log(error);
    })

