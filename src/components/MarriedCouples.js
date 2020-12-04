import React, {Component} from 'react';
import MarriedCouple from "./MarriedCouple";

class MarriedCouples extends Component {
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
        const couple = [];

        this.man.forEach(man => {
            const wife = this.woman.find(woman => woman.husband_id === man.id)
            couple.push([man, wife])
        })

        return couple;
    }

    render() {

        const couple = this.generatePara();


        return (
            <div>
                {
                    couple.map(couple => <MarriedCouple couple={couple}/>)
                }
            </div>
        );
    }
}

export default MarriedCouples;