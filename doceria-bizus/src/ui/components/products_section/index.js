import ProductBox from "../product_box"
import ButtonNext from "./button-next"

import BrigadeiroChurrosImg from '../../../assets/pictures/brigadeiro_churros.png'
import BrigadeiroTradicionalImg from '../../../assets/pictures/brigadeiro_tradicional.png'
import BrigadeiroBeijinhoImg from '../../../assets/pictures/brigadeiro_beijinho.png'


import { Container } from "./styled"
import { Tittle } from '../../styles/styledTexts'

export default function ProductsSection() {
    return (
        <Container>
            <div className="tittleSection">
                <Tittle size="85" color="#652807">
                    Brigadeiros
                </Tittle>
                <div className="lineTittle"></div>
            </div>
            <section className="productsSection">
                <ButtonNext direction="LEFT" />
                <section className="productSlider">
                    <ProductBox product={{ name: "Churros", price: 230.99, image: BrigadeiroChurrosImg }} />
                    <ProductBox product={{ name: "Tradicional", price: 230.99, image: BrigadeiroTradicionalImg }} />
                    <ProductBox product={{ name: "Beijinho", price: 230.99, image: BrigadeiroBeijinhoImg }} />
                </section>
                <ButtonNext direction="RIGTH" />
            </section>
        </Container>
    )
}

