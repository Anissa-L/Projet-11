const mongoose = require("mongoose");
const databaseUrl =
  process.env.DATABASE_URL || "mongodb://localhost/argentBankDB";

module.exports = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://lamtalsi03:G5b2N4XUNPtEff51@cluster0.u2d9oay.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      { useNewUrlParser: true }
    );
    console.log("Database successfully connected");
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`);
    throw new Error(error);
  }
};

/*const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://lamtalsi03:G5b2N4XUNPtEff51@cluster0.u2d9oay.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);*/
