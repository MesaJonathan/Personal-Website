import {useState} from 'react';
import ListItem from './ListItem';

export default function Todo(){
    const[todo, setTodo] = useState("");
    const[todoList, setTodoList] = useState([]);

    const handleChange=(event)=>{
        setTodo(event.target.value);
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
         
        let tempList = todoList;
        tempList.push(todo);
        setTodoList(tempList);
        console.log(todoList);
    }; //create temp list from current list, add to temp, then set currlist to temp

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={todo} onChange={handleChange} type="text"></input>
                <button type="submit">Add</button>
            </form>
            {todoList.map((item) => (
                <ListItem key={item} name={item}>List Item</ListItem>
            ))}
        </div>
    );
}