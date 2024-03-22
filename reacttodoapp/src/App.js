import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [nextItem, setNextItem] = useState([]);

  function handleSubmit(e){
    e.preventDefault();
    
    setTodos( currentTodos => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title: nextItem}
      ]
    })
    setNextItem("");
  }

  function deleteTodo(id){
    setTodos( currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  
  return (
    <div className="App" class = "h-screen w-screen bg-green-200 flex flex-row justify-center items-center">
      <div class = "w-1/2 max-sm:w-3/4 h-5/6 bg-green-400 rounded-3xl flex flex-col items-center">
        <form 
          class = "h-1/3 w-full flex flex-row justify-center items-center"
          onSubmit = {handleSubmit}
        >
          <input
            class = "w-1/2 h-1/3 border-4 border-yellow-300 bg-yellow-100 rounded-l-lg pl-4"
            placeholder = "Add a todo"
            value = {nextItem}
            onChange = {e => (setNextItem(e.target.value))}
          >
          </input>
          <button
            class = "w-1/4 h-1/3 bg-yellow-300 rounded-r-lg"
          >
            Add
          </button>
        </form>
        <div class = "w-5/6 h-3/5 bg-green-600 rounded-3xl flex flex-col items-center p-2">
            {todos.map( todo => {
              return(
                <div class = "w-full h-[19%] bg-green-300 rounded-3xl flex flex-row">
                  <p
                    class = "w-4/5 h-full items-center flex flex-row pl-6 text-white font-bold font-serif"
                  >
                  {todo.title}</p>
                  <div class = "w-1/5 h-full items-center flex flex-row">
                    <button 
                      class = " bg-green-200 rounded-full p-2 font-bold font-serif"
                      onClick={() =>deleteTodo(todo.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )
            })}
            
        </div>
      </div>
    </div>
  );
}

export default App;
