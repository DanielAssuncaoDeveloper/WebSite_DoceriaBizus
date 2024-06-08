import { useState } from 'react'

import { Container, LogoContainer } from './styled'

import LogoIcon from '../../../assets/icons/logoicon.svg'
import ShoppingCartIcon from '../../../assets/icons/shopping_cart.svg'

import ShoppingCart from '../modals/shopping_cart'

export default function Header(props){

    return (
        <Container>
            {
                props.useShoppingCart ? <ShoppingCart removeItem={props.removeItem} cartItens={props.shoppingCartItens} changeShoppingCart={props.showShoppingCart} /> : ""
            }
            <LogoContainer>
                <img src={LogoIcon}/>
            </LogoContainer>

            <div onClick={() => props.showShoppingCart()} className='shoppingcart-container'>
                <img src={ShoppingCartIcon}/>
            </div>
        </Container>
    )
} 