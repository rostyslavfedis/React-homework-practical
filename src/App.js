import React, {useState, useEffect, useReducer} from 'react';
import './App.css';

export default function App() {
    const [counter, setCounter] = useState(0)


    const increment = () => {
        setCounter(prevState => prevState + 1);
    }
    const incrementHundred = () => {
        setCounter(prevState => prevState + 100);
    }
    const decrement = () => {
        setCounter(prevState => prevState - 1);
    }
    const decrementHundred = () => {
        setCounter(prevState => prevState - 100);
    }
    const reset = () => {
        setCounter(0)
    }
    const form1Handler = (e) => {
        e.preventDefault();
        const num = e.target[0].value;
        const parse= Number(num);
        console.log(num);
        setCounter(prevState => prevState+parse);
    }
    return (
        <div className="App">

            <div className="Counter">
                <div className="calculator">Calculator</div>
                <h2>{counter}</h2>
                <div className="UPDOWN">
                    <button className={"UP"} onClick={increment}>1</button>
                    <button className={"DOWN"} onClick={decrement}>-1</button>
                </div>
                <div className="UPDOWNHUNDRED">
                    <button className={"UPhundred"} onClick={incrementHundred}>100</button>
                    <button className={"DOWNhundred"} onClick={decrementHundred}>-100</button>
                </div>
                <div className="RESETDIV">
                <button className={"RESET"} onClick={reset}>RESET</button>
                </div>
                <div className={'FORMA'}>
                    <form className={'myform'} onSubmit={form1Handler}>
                        <input className={'input'} type="number"/>
                        <button className={'submit'}>Submit</button>
                    </form>
                </div>
            </div>


        </div>
    )


}
