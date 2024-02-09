import React, {useState} from "react";
//Add API, we ll need it later when we send a delete request
const API_BASE= 'https://to-do-app-server-5fedux80l-uthayakumar-abirams-projects.vercel.app//todo';
function TodoItem(props){
  const {name, id, completed, setItems} = props
 
    const deleteTodo = async(id) => {
      try{
          const response = await fetch(API_BASE + "/delete/" + id, {
              method: "DELETE",
            });
          if(!response.ok){
              throw new Error("Faild to delete a task")
          } 
          const data = await response.json()
          setItems(items=> items.filter(item=> item._id !== data._id))
      }catch (error) {
          console.error("Error updating task status:", error);
        }
    }

  return(
   <div className={"todo" + (completed ? " check-complete" : "")} key={id}>
      <div className="text">{name}</div>
      <div className="delete-todo" onClick={()=>deleteTodo(id)}><span >X</span></div>
    </div>
    
  )
}

export default TodoItem;