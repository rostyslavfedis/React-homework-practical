import React, {useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import './App.css'

import {Header} from './component/header'
import {useServices} from './services/index'
import {ProductList} from './component/product-list'
import {setProducts} from './redux'

export default function App() {
    
    const {cart, wishlist, products} = useSelector(
        ({cart: {cart}, wishlist: {wishlist}, products: {products}}) =>
            ({
                cart,
                wishlist,
                products
            })
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProducts())
    }, [])
    
    return (
        <div className="App">
            <Header/>
            <ProductList products={products}/>
            {products.length}
            {/*{cart.length}*/}
            {/*{wishlist.length}*/}
        </div>
    )
}
