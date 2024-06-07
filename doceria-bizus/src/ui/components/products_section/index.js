import ProductBox from "../product_box"
import ButtonNext from "./button-next"

import BrigadeiroChurrosImg from '../../../assets/pictures/brigadeiro_churros.png'
import BrigadeiroTradicionalImg from '../../../assets/pictures/brigadeiro_tradicional.png'
import BrigadeiroBeijinhoImg from '../../../assets/pictures/brigadeiro_beijinho.png'


import { Container } from "./styled"
import { Tittle } from '../../styles/styledTexts'

const products = [
    { idProduct: 1, description: "Churros", price: 230.99, image: BrigadeiroChurrosImg },
    { idProduct: 2, description: "Tradicional", price: 230.99, image: BrigadeiroTradicionalImg },
    { idProduct: 3, description: "Beijinho", price: 230.99, image: BrigadeiroBeijinhoImg }
]

export default function ProductsSection(props) {
    return (
        <Container>
            <div className="tittleSection">
                <Tittle size="85" color="#652807">
                    Brigadeiros
                </Tittle>
                <div className="lineTittle"></div>
            </div>
            <section className="productsSection">
                <section className="productSlider">
                    {
                        products.map(x => 
                            <ProductBox addItemToShoppingCart={props.addItemToShoppingCart} product={x} />
                        )
                    }
                 </section>
            </section>
        </Container>
    )
}

