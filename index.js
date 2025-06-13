const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const app = express()
const port = 3000

app.use(cors());
app.use(express.json())

//mongoDB 
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.keyl6e1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
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
    //   await client.connect();

    //collections
    const foodCollections = client.db('assignment-11').collection('food-collection')
    const requestCollections = client.db('assignment-11').collection('request-collection')

    //food collection apis
    app.get('/food', async (req, res) => {
      const query = {foodStatus:'available'}
      const limit = req.query.limit
      console.log(limit)
      if (limit ) {
        const result = await foodCollections.find(query).limit(6).toArray()
        return res.send(result)
      }
      const result = await foodCollections.find(query).sort({expiredDate: 1}).toArray();
      res.send(result)
    })
    app.get('/food/:id', async (req, res) => {
      const id = req.params.id;
      const query =new ObjectId(id)
      const result = await foodCollections.findOne(query)
      res.send(result)
    })
    app.post('/food',async (req, res) => {
      const food = req.body;
      const result = await foodCollections.insertOne(food);
      res.send(result)
    })
    app.patch('/food/:id',async (req, res) => {
      const id = req.params.id
      const filter = { _id: new ObjectId(id) }
      const foodStatus = req.body;
      console.log(id, foodStatus)
      const update = {
        $set:{foodStatus}
      }
      const result = await foodCollections.updateOne(filter, update);
      res.send(result)
    })


    //request food apis
    app.get('/request-food',async (req, res) => {
      const result = await requestCollections.find().toArray();
      res.send(result)
    })
    app.post('/request-food',async (req, res) => {
      const request = req.body;
      const result = await requestCollections.insertOne(request);
      res.send(result)
    })




    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
