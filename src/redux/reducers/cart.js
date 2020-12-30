import {TOGGLE_ITEM_IN_CART} from '../action-types'
const initialState={
    cart:[]
};


export  default (state=initialState, action)=>{
    switch (action.type){
        case TOGGLE_ITEM_IN_CART:{
            const updateCart = state.cart.filter(
                (el)=>el.id!==action.payload.id)

            if(updateCart.length===state.cart.length){
                updateCart.push(action.payload)
            }
            return {...state, cart: updateCart};
        }
        default:{
            return state
        }
    }
}