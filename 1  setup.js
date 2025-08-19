// mkdir filename  = create a folder
// cd filename = change directory to that folder  
// npm init -y = create a package.json file
// npm install express cors dotenv mongodb = install these packages
// code . = open the folder in vs code
// index.js = create a file named index.js
// in package.json insert 'start' script
    // "start": "index.js",




const express = require('express');
const cors = require('cors');
const app = express();

const port= process.env.PORT || "5000";


//Middleware
app.use(cors());
app.use(express.json());


// CRUD
app.get("/", (req, res) => {
  res.send("This is a second");
})


// listner server
app.listen(port, () => {
  console.log(`Server is running in port: ${port}`)
});