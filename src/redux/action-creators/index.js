import {
    SET_PRODUCTS, TOGGLE_ITEM_IN_WISHLIST,
    TOGGLE_ITEM_IN_CART
} from '../action-types';
import {services} from '../../services';

const {productService} = services;

// export const setProducts = () => async (dispatch) => {
//
//     const response = await productService.getProducts();
//     const json = await response.json();
//     dispatch(({type: SET_PRODUCTS, payload: json}))
//
// }

//todo тут так ще можно))
export const setProducts = () => (dispatch) => {
    productService
        .getProducts()
        .then(response=>response.json())
        .then(data => dispatch(({type: SET_PRODUCTS, payload: data})))
}
export const toggleItemInCart = (product) => ({type: TOGGLE_ITEM_IN_CART, payload: product});
export const toggleItemInWishlist = (product) => ({type: TOGGLE_ITEM_IN_WISHLIST, payload: product});
