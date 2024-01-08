//Require mongoose
import mongoose from 'mongoose'; 

//Create schema contains a single field named 'name.' 
//The 'name' field is of type String
const TodoSchema = new mongoose.Schema({ name : String }); 

//Export the Mongoose model with the collection name "Todo"
const Todo = mongoose.model('Todo', TodoSchema);
export{Todo}
