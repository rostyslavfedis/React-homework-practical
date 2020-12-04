import React, {Component} from 'react';
import Man from "./Man";

class Mans extends Component {
        man = [
        {id: 1, name: 'Oleh', wife_id: 1},
        {id: 2, name: 'Dima', wife_id: 2 },
        {id: 3, name: 'Rostyk', wife_id: 3},
        {id: 4, name: 'Marik', wife_id: 4},
        {id: 5, name: 'Max', wife_id: 5},

    ];
    render() {
        return (
            <div>
                {
                    this.man.map((boy)=>{
                        return (<Man item={boy}/>)
                          })
                      }
            </div>
        );
    }
}

export default Mans;