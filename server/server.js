// Server Side -> Mohamed , Koussay 
require("dotenv").config(); // access env file
const express = require("express");
const app = express();
const cors = require("cors");

// Origin Client Side
app.use(express.json());
app.use(cors());

// Starting Server PORT localhost:3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => { console.log(`We Connecting PORT -> ${PORT}`); });