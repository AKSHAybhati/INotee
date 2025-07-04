require('dotenv').config();
const express = require("express");
const cors = require("cors"); 
const mongoose = require("mongoose");


const app = express();
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error("MongoDB connection error:", err));

app.use(cors({
    origin: "https://i-notee.vercel.app", 
  credentials: true
}));
app.use(express.json());

const noteroute = require('./routes/Note');
app.use('/api', noteroute);

const authRoute = require('./routes/Auth');
app.use('/api/auth', authRoute);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
