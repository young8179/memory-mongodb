import express from "express";
import bodyParser from  "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors";
import postRoutes from "./routes/posts.js"

dotenv.config()

const app = express();


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use("/api/v2/posts", postRoutes)

app.get('/', (req,res) => {
    res.send('Hello to okeydokey api') 
})

const CONNECTION_URL = process.env.MONGODB_KEY
const PORT = process.env.PORT || 5000



mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, ()=> console.log(`Server running on port ${PORT}}`)))
    .catch((error)=> console.log(error))

mongoose.set("useFindAndModify", false); 