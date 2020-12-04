import React, {Component} from 'react';

import Para from "./component/Para";
import Users from "./component/Users";
import Cars from "./component/Cars";


class App extends Component {
    users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true}];
    cars = [
        {
            model: '2101',
            year: 1970,
            motor: 1.3,
            color: 'white'
        },
        {
            model: '2102',
            year: 1999,
            motor: 1.5,
            color: 'red'
        }, {
            model: '2103',
            year: 1972,
            motor: 1.2,
            color: 'black'
        }, {
            model: '2104',
            year: 1985,
            motor: 1.5,
            color: 'brown'
        }, {
            model: '2105',
            year: 1994,
            motor: 1.6,
            color: 'blue'
        }, {
            model: '2106',
            year: 2000,
            motor: 1.6,
            color: 'dark blue'
        }, {
            model: '2107',
            year: 1999,
            motor: 1.6,
            color: 'dark red'
        }, {
            model: '2108',
            year: 2001,
            motor: 1.4,
            color: 'white'
        }, {
            model: '2109',
            year: 1999,
            motor: 1.6,
            color: 'green'
        }, {
            model: '2110',
            year: 2003,
            motor: 1.6,
            color: 'yellow'
        },
    ];

    man = [
        {id: 1, name: 'Oleh', wife_id: 1},
        {id: 2, name: 'Dima', wife_id: 2 },
        {id: 3, name: 'Rostyk', wife_id: 3},
        {id: 4, name: 'Marik', wife_id: 4},
        {id: 5, name: 'Max', wife_id: 5},

    ];

    woman = [
        {id: 1, name: 'Khrustuna', husband_id: 1},
        {id: 2, name: 'Yana', husband_id: 2},
        {id: 3, name: 'Roma', husband_id: 3},
        {id: 4, name: 'Karina', husband_id: 4},
        {id: 5, name: 'Anya', husband_id: 5},
    ]

    generatePara = () => {
        const pars = [];

        this.man.forEach(man => {
            const wife = this.woman.find(woman => woman.husband_id === man.id)
            pars.push([man, wife])
        })

        return pars;
    }


    render() {
        const pars = this.generatePara();
        return (
            <div>

                {
                    pars.map(par => <Para par={par}/>)
                }



                {
                    this.users.map((user) => {
                        return (<Users item={user}/>)
                    })
                }
                {
                    this.cars.map((car) => {
                        return (<Cars elem={car}/>)
                    })
                }
            </div>
        );
    }
}

export default App;
