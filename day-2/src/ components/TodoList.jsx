import { useState } from "react"

const TodoList =()=>{
    const[list, setList]= useState('');
    const[TodoList, setTodoList] = useState([]);

    const handleAdditems =()=>{
        if(!list) return;
        setTodoList([...TodoList,list])
        setList("")
    }

    return(
        <div>
            <label>Enter Todo List</label>
            <input value={list} type="text" onChange={(e)=> setList(e.target.value)} />

            <button onClick={handleAdditems}>Add Todo</button>
            
            <p>List of Todo Items</p>
            <ul>
                {TodoList.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
export default TodoList;