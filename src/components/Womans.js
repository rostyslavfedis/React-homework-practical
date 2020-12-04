import React, {Component} from 'react';
import Woman from "./Woman";

class Womans extends Component {
    woman = [
        {id: 1, name: 'Khrustuna', husband_id: 1},
        {id: 2, name: 'Yana', husband_id: 2},
        {id: 3, name: 'Roma', husband_id: 3},
        {id: 4, name: 'Karina', husband_id: 4},
        {id: 5, name: 'Anya', husband_id: 5},
    ]
    render() {
        return (
            <div>
                {
                          this.woman.map((girl)=>{
                              return (<Woman elem={girl}/>)
                          })
                      }
            </div>
        );
    }
}

export default Womans;