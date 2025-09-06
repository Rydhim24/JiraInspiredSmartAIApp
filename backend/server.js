
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();




const empRoutes = require("./routes/empRoutes");
const taskRoutes = require("./routes/taskRoutes");

const MONGO_URL = "mongodb+srv://RiddhimaSharma:admin@cluster0.hviac.mongodb.net/employees?retryWrites=true&w=majority&appName=Cluster0";


//mongodb+srv://RiddhimaSharma:admin@cluster0.hviac.mongodb.net/employees?retryWrites=true&w=majority&appName=Cluster0


app.use(express.json());
app.use(cors());

mongoose.connect(MONGO_URL)
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.error(err));


app.use("/api/emp", empRoutes);
app.use("/api/task", taskRoutes);



const PORT = process.env.PORT || 5500;

app.listen(PORT, () => (console.log("Server running on port:", PORT)));

