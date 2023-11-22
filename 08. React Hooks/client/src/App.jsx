import {useState, useEffect} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList';


const baseUrl = 'http://localhost:3030/jsonstore/todos';

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        fetch(baseUrl)
            .then(res => res.json())
            .then(result => {
                setTodos(Object.values(result))
                console.log(Object.values(result));
            })
    },[])

    return (
        <>
         <Header />
         <ToDoList todos={todos} />
        </>
    )
}

export default App