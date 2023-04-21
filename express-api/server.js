const express = require('express');

//Express Application
const app = express();


//Listen for requests
const port = process.env.PORT || 4000;
console.log(process.env.PORT);
console.log(process.env.DATABSE_URL);
app.listen(port, ()=> console.log(`listening on port ${port}`));

