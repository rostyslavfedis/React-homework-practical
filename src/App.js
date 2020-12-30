import React, {useState, useEffect} from 'react';
import './App.css';

export default function App() {

    const [counter, setCounter] = useState(1)
    const [user, setUser] = useState()

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${counter}`)
            .then(response => response.json())
            .then(json => setUser(json))
    },[counter])

    const increment = () => {
        setCounter(prevState=>prevState + 1);
    }
    const decrement = () => {
        setCounter(prevState=>prevState - 1);
    }
    const reset=()=>{
        setCounter(1)
    }
    return (
        <div className="App">
            <div className="Counter">
                <h2>Counter value: {counter}</h2>
                <button className={"UP"} onClick={increment}>UP</button>
            <button className={"DOWN"} onClick={decrement}>DOWN</button>
            <button className={"RESET"} onClick={reset}>RESET</button>
            </div>

            <div className="Users">
                <h2>USERS FROM API</h2>

                {!!user &&(
                    <div>
                    <h3>id: {user.id}</h3>
                    <h3>name: {user.name}</h3>
                    <h3>username: {user.username}</h3>
                    <h3>phone: {user.phone}</h3>
                    <h3>website: {user.website}</h3>
                    </div>
                    )
                }
            </div>
        </div>
    )
}
