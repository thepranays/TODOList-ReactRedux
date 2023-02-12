
import './App.css';
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
function App() {
  //local state
  const [todo, setTodo] = React.useState();
  const dispatch = useDispatch();//used to call actions
  //too access our state
  const Todo = useSelector(state => state.Todo);
  const { todos } = Todo;


  //onFormIsSubmitted
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };

  //OnDeleteButtonIsPressed
  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  }




  return (
    <div className='App'>
      <header className='App-Header'>TODO ListApp</header>
      <h2>TODO App Using Redux</h2>
      <form onSubmit={handleSubmit}>

        <input placeholder="Enter a TODO"
          style={{
            width: 350,
            padding: 10,
            borderRadius: 20,
            border: "none",
            fontSize: 20,
          }}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          style={{
            padding: 12,
            borderRadius: 25,
            fontSize: 15,
            marginLeft: 20
          }}

        >GO</button>

      </form>

      <ul className='allTodos'>
        {todos && todos.map((t) => {
          return <li key={t.id} className='singleTodo'>
            <span className='todoText'>{t.todo}</span>
            <button onClick={() => removeHandler(t)} style={{
              padding: 10,
              borderRadius: 25,
              border: "1px solid white",
              color: "white",
              backgroundColor: "orangered",
            }}>DELETE</button>
          </li>

        })}

      </ul>
    </div>
  );
}

export default App;
