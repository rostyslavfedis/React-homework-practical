import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";


export default function App () {
    const dispatch = useDispatch();
    const store = useSelector((store) => store);
    console.log(store)

    const form1Handler = (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const age = e.target[1].value;
        const id = new Date().getTime();
        dispatch({type: 'ADD_USER', payload: {name, age, id}})
    }
    const selectHandler = (e) => {
        dispatch({type: 'DELETE_USER', payload: e.target.value})
    }
    const editHandler =(e)=>{
    dispatch({type:'EDIT_USER', payload: e.target.value})
    }

    return (
        <div>
            <form onSubmit={form1Handler}>
                <input type="text"/>
                <input type="number"/>
                <button>Submit</button>
            </form>

                <div>
                    {store.map(user =>
                    <div>Name: {user.name}
                    <br/>Age: {user.age}
                    <br/><button onClick={selectHandler} value={user.id}>delete</button>
                    <button onClick={editHandler}>edit</button>
                    </div>)}
                </div>

        </div>
    );
}