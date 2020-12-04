// import React, {Component} from 'react';
// import MarriedCouples from "./components/MarriedCouples";
// import Womens from "./components/Womans";
// import Mans from "./components/Mans";
// import "./App.css"
//
//
// class App extends Component {
//
//     man = [
//         {id: 1, name: 'Oleh', wife_id: 1},
//         {id: 2, name: 'Dima', wife_id: 2 },
//         {id: 3, name: 'Rostyk', wife_id: 3},
//         {id: 4, name: 'Marik', wife_id: 4},
//         {id: 5, name: 'Max', wife_id: 5},
//
//     ];
//
//     woman = [
//         {id: 1, name: 'Khrustuna', husband_id: 1},
//         {id: 2, name: 'Yana', husband_id: 2},
//         {id: 3, name: 'Roma', husband_id: 3},
//         {id: 4, name: 'Karina', husband_id: 4},
//         {id: 5, name: 'Anya', husband_id: 5},
//     ]
//
//     generatePara = () => {
//         const couple = [];
//
//         this.man.forEach(man => {
//             const wife = this.woman.find(woman => woman.husband_id === man.id)
//             couple.push([man, wife])
//         })
//
//         return couple;
//     }
//
//
//     render() {
//         const couple = this.generatePara();
//         return (
//             <div className={'one'}>
//                 <div> {
//                           this.man.map((boy)=>{
//                               return (<Mans item={boy}/>)
//                           })
//                       }
//                    </div>
//                     <div>
//                       {
//                           this.woman.map((girl)=>{
//                               return (<Womens elem={girl}/>)
//                           })
//                       }
//                     </div>
//                       <div>
//                 {
//                     couple.map(couple => <MarriedCouples couple={couple}/>)
//                     }
//                       </div>
//                 </div>
//         );
//     }
// }
//
// export default App;
import './App.css';
import React, {Component} from 'react';
import Mans from "./components/Mans";
import Womans from "./components/Womans";
import MarriedCouples from "./components/MarriedCouples";


class App extends Component {
    render() {
        return (
            <div className={'one'}>

    <Mans/>
    <Womans/>
    <MarriedCouples/>
            </div>
        );
    }
}

export default App;