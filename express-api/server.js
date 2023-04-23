require('dotenv').config();
const express = require('express');
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

//Listen for requests
const port = process.env.PORT || 4000;
app.listen(port, ()=>console.log(`Listening on port ${port}`));