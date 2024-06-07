import React from 'react';

import ShoppingCart from '../../ui/components/modals/shopping_cart'
import ImageItem from '../../assets/pictures/brigadeiro_beijinho.png'


const itens = [{
    image: ImageItem,
    description: "Beijinho",
    amount: 1
}]

export default function TestComponents(){
    return (
        <>
            <ShoppingCart cartItens={itens} />
        </>
    )
}