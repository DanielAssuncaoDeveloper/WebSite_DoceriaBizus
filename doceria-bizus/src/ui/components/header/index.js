import { useState } from 'react'

import { Container, LogoContainer } from './styled'

import LogoIcon from '../../../assets/icons/logoicon.svg'
import ShoppingCartIcon from '../../../assets/icons/shopping_cart.svg'

import ShoppingCart from '../modals/shopping_cart'

export default function Header(props){
    const [useShoppingCart, changeShoppingCart] = useState(false)

    function showShoppingCart(){
        changeShoppingCart(!useShoppingCart)
    }

    return (
        <Container>
            {
                useShoppingCart ? <ShoppingCart removeItem={props.removeItem} cartItens={props.shoppingCartItens} changeShoppingCart={changeShoppingCart} /> : ""
            }
            <LogoContainer>
                <img src={LogoIcon}/>
            </LogoContainer>

            <div onClick={() => showShoppingCart()} className='shoppingcart-container'>
                <img src={ShoppingCartIcon}/>
            </div>
        </Container>
    )
} 