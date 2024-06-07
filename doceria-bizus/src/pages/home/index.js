import { React, useState } from 'react';

import Header from  '../../ui/components/header'
import Banner from '../../ui/components/banner';
import ProductsSection from '../../ui/components/products_section';

export default function Home(){

    const [shoppingCartItens, ChangeShoppingCartItens] = useState([])

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

    return (
        <>
            <Header shoppingCartItens={shoppingCartItens} />
            <Banner />
            <ProductsSection addItemToShoppingCart={addItemToShoppingCart} />
        </>
    )
}