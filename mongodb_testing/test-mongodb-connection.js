require('dotenv').config();
   const mongoose = require('mongoose');

   console.log('Current working directory:', process.cwd());
   console.log('Contents of process.env:', process.env);

   const uri = process.env.MONGODB_URI;

   async function testConnection() {
     if (!uri) {
       console.error('MONGODB_URI is not defined in the environment variables');
       console.log('TEST_VAR:', process.env.TEST_VAR);
       return;
     }

     try {
       await mongoose.connect(uri);
       console.log('Connected successfully to MongoDB');
       
       const collections = await mongoose.connection.db.listCollections().toArray();
       console.log('Collections:', collections.map(c => c.name));
       
       await mongoose.disconnect();
       console.log('Disconnected from MongoDB');
     } catch (error) {
       console.error('Error connecting to MongoDB:', error);
     }
   }

   testConnection();