import React, {memo, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import './App.css'

const Test = memo(() => {

    console.log('test was rendered');

    const [user, setUser] = useState()
    const storeCounter = useSelector(({counter}) => counter);
    const dispatch = useDispatch();

    const up = () => dispatch({type: 'INC_COUNTER'});
    const down = () => dispatch({type: 'DEC_COUNTER'});
    const reset = () => dispatch({type: 'RESET_COUNTER'});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${storeCounter}`)
            .then(response => response.json())
            .then(json => setUser(json))
    }, [storeCounter])

    return (
        <div className={'Main'}>
            <div className={'Counter'}>
                <h2>COUNTER: {storeCounter}</h2>
                <button className={'UP'} onClick={up}>UP</button>
                <button className={'DOWN'} onClick={down}>DOWN</button>
                <button className={'RESET'} onClick={reset}>RESET</button>
            </div>

            <div className="Users">
                <h2>USERS FROM API</h2>

                {!!user && (
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
})


export default function App() {
    return (
        <div className="App">
            <Test title={"test"}></Test>
        </div>
    )
}
