require('dotenv').config();
const express = require('express');

//Express app
const app = express();

//Listen for requests
const port = process.env.PORT || 4000;
console.log(process.env.PORT)
app.listen(port, ()=>console.log(`Listening on port ${port}`));