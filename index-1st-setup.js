const express = require('express');
const cors = require('cors');
const app = express();

const port= process.env.PORT || "5000";


// Middleware
app.use(cors());
app.use(express.json());


// CRUD
app.get('/', (req, res) => {
  res.send("This is a second");

});



// Listening to server
app.listen(port, () => {
  console.log(`Server is running in port: ${port}`)
})