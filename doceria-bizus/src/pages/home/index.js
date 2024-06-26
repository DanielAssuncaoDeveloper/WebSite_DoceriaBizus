import { React, useState } from 'react';

import Header from  '../../ui/components/header'
import Banner from '../../ui/components/banner';
import ProductsSection from '../../ui/components/products_section';
import Footer from '../../ui/components/footer'

export default function Home(){

    const [shoppingCartItens, ChangeShoppingCartItens] = useState([])
    const [useShoppingCart, changeShoppingCart] = useState(false)

    function showShoppingCart(){
        changeShoppingCart(!useShoppingCart)
    }

    function addItemToShoppingCart(product){
        let item = shoppingCartItens.find(x => x.idProduct === product.idProduct)        
        let newKey = shoppingCartItens.length + 1

        if (item === undefined)
            item = {...product, mount: 1, key: newKey}
        else 
            item.mount++

        let newItens = [item]  
        let outherItens = shoppingCartItens.filter(x => x.key !== item.key) 

        if (outherItens.length !== 0)
            newItens = [item, ...outherItens]

        ChangeShoppingCartItens(newItens)
    }

    function removeItem(key){
        let newItens = shoppingCartItens.filter(x => x.key !== key)
        ChangeShoppingCartItens(newItens)
    }

    return (
        <>
            <Header useShoppingCart={useShoppingCart} showShoppingCart={showShoppingCart} removeItem={removeItem} shoppingCartItens={shoppingCartItens} />
            <Banner />
            <ProductsSection showShoppingCart={showShoppingCart} addItemToShoppingCart={addItemToShoppingCart} />
            <Footer />
        </>
    )
}