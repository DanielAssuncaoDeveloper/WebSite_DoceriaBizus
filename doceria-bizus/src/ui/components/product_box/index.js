import React from "react"

import { Button } from '../../styles/styledInputs'
import { Tittle, Price } from "../../styles/styledTexts"
import { Container } from "./styled"

export default function ProductBox(props) {
    return (
        <Container>

            <div className="imageSection">
                <img src={props.product.image} alt="image_product" />
            </div>
            <Tittle size="50">{props.product.description}</Tittle>
            <Price size="20">R$ {props.product.price}</Price>

            <Button onClick={() => {
                props.addItemToShoppingCart(props.product);
                props.showModalMarket()
            }

            } style={{ marginTop: "20px" }} width="240px" height="35px">Adicionar ao Carrinho</Button>
        </Container>
    )
}