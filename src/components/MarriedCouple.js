import React, {Component} from 'react';

class MarriedCouple extends Component {
    render()
    {let [man, woman] =this.props.couple;

        return (
            <div>
                {
                    <span>{man.name} - {woman.name}</span>
                }
            </div>
        );
    }
}

export default MarriedCouple;