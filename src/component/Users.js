import React, {Component} from 'react';

class Users extends Component {
    render() {
        let{item}=this.props;
        return (

            <div className={'userClass'}>
                {item.name}-{item.age}-{item.status.toString()}
            </div>

        );
    }
}

export default Users;