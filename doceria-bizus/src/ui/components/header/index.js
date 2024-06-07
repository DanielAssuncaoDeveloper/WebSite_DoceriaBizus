import { Container, LogoContainer } from './styled'

import LogoIcon from '../../../assets/icons/logoicon.svg'
import ShoppingCartIcon from '../../../assets/icons/shopping_cart.svg'

export default function Header(){
    return (
        <Container>
            <LogoContainer>
                <img src={LogoIcon}/>
            </LogoContainer>

            <div className='shoppingcart-container'>
                <img src={ShoppingCartIcon}/>
            </div>
        </Container>
    )
} 