const initialState = [];

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER': {
            return [...state, action.payload]
        }
        case 'DELETE_USER': {
            return state.filter((user) => user.id !== +action.payload);
        }
        case 'EDIT_USER': {
            return [...state, action.payload ]
        }
        default: {
            return state;
        }
    }
}