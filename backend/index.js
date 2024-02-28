// const express = require('express')
// const app = express();
// app.use(express.json());
// const userRoute = require('./routes/UserRoute')
// // const itemRoute = require('./routes/ItemRoute')
// // const adminRoute = require('./routes/AdminRoute')
// const mongoose = require('mongoose')
// const PORT = 3500;

// const cors = require("cors")
// app.use(cors());

// mongoose.connect(
//     "mongodb://127.0.0.1:27017/Mobile")
//     .then(() => {
//         console.log("Connected to MongoDB");

//         // Define a Mongoose schema
//         const userSchema = new mongoose.Schema({
//             name: String,
//             email: String
//         });



//         // Create a Mongoose model
//         const User = mongoose.model('User', userSchema);

//         // Insert a document into the 'users' collection
//         return User.create({ name: 'Uwani', email: 'uwanitheekshani@gmail.com' });
//     })
//     .then(() => {
//         app.listen(PORT, () => {
//             console.log(`API Running on ${PORT}`)
//         })
//     }).catch((err) => {
//         console.error(err)
//     });
// app.use('/api/v1/',userRoute);
// app.use('/api/v1/',itemRoute);
// app.use('/api/v1/',adminRoute);





const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/UserRoute')
const phoneRoute = require('./routes/PhoneRoute')

const app = express();
app.use(express.json());

const PORT = 3500;

const cors = require("cors")
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/Mobile")

  .then((user) => {
    console.log("Document inserted successfully:", user);

    // Start the Express server
    app.listen(PORT, () => {
      console.log(`API Running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error:", err);
  });
  app.use('/api/v1/',userRoute);
  app.use('/api/v1/',phoneRoute);
