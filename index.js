const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();

// port
const port= process.env.PORT || "5000";


//Middleware
app.use(cors());
app.use(express.json());


// connect to MongoDB
console.log(process.env.user);
console.log(process.env.password);

// paste full coped code here and add user and pass in the code

// const uri = "mongodb+srv://<db_username>:<db_password>@cluster0.8c67l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const uri = `mongodb+srv://${process.env.user}:${process.env.password}@cluster0.8c67l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();


    const practiceCollection = client.db('practiceDB').collection('practiceCollection');
      // databas name = practiceDB
      // collection name = practCollection
      


      
    // get operation with query
    app.put("/updateblog/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await practiceCollection.findOne(query);
      res.send(result);
    })


  



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



// CRUD
app.get("/", (req, res) => {
  res.send("This is a second");
})


// listner server
app.listen(port, () => {
  console.log(`Server is running in port: ${port}`)
});