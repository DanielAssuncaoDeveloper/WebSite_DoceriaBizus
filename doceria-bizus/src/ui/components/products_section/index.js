import { useState } from "react"
import ProductBox from "../product_box"

import BrigadeiroChurrosImg from '../../../assets/pictures/brigadeiro_churros.png'
import BrigadeiroTradicionalImg from '../../../assets/pictures/brigadeiro_tradicional.png'
import BrigadeiroBeijinhoImg from '../../../assets/pictures/brigadeiro_beijinho.png'


import ModalCarrinho from '../../../ui/components/modals/add_to_shopping_cart/index.js'

import { Container } from "./styled"
import { Tittle } from '../../styles/styledTexts'

const products = [
    { idProduct: 1, description: "Churros", price: 230.99, image: BrigadeiroChurrosImg },
    { idProduct: 2, description: "Tradicional", price: 230.99, image: BrigadeiroTradicionalImg },
    { idProduct: 3, description: "Beijinho", price: 230.99, image: BrigadeiroBeijinhoImg }
]

export default function ProductsSection(props) {
    const [useModalMarkert, changeModalMarket] = useState(false)

    function showModalMarket() {
        changeModalMarket(!useModalMarkert)
    }

    return (
        <Container>
            {
                useModalMarkert ? <ModalCarrinho showShoppingCart={props.showShoppingCart} showModalMarket={showModalMarket}/> : ""
            }
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
                            <ProductBox showModalMarket={showModalMarket} addItemToShoppingCart={props.addItemToShoppingCart} product={x} />
                        )
                    }
                </section>
            </section>
        </Container>
    )
}

