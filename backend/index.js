import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config(); 
import {Todo} from'./models/todo.js';

const corsOptions = {
    "origin": "*",
    "methods": "GET, HEAD, PUT, PATCH, POST, DELETE",
    // other options
}

index.use(cors(corsOptions));
const app = express(); 

app.use(express.json()); 
app.use(cors()); 

const port = process.env.PORT || 4001;

const connectionString = process.env.MONGO_URI; 
mongoose.connect(connectionString)
.then(() => console.log('Connected to the database…'))
.catch((err) => console.error('Connection error:', err));
app.use(express.json()); app.use(express.urlencoded({ extended: true }));
//Routes 
app.get('/', async (req, res) => { 
   const allTasks = await Todo.find();
   res.json(allTasks)
 });

app.post('/new', async (req,res) => {
    const newTask = await Todo.create(req.body);
    res.status(201).json({newTask})
})

app.delete('/delete/:id', async(req,res)=>{
    const result = await Todo.findByIdAndDelete(req.params.id)
    res.json(result)
})


app.listen(port, () => console.log(`Server is running on port ${port}`));