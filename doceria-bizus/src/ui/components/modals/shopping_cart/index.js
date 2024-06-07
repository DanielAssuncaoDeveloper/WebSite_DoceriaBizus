import React from "react";
import { useState } from "react";

import { Conteiner, Modal } from "./styled.js";

import { Button } from "../../../styles/styledInputs.js";
import { Tittle, Text } from '../../../styles/styledTexts.js'

import InputSpinner from '../../../styles/input/spinner/index.js'

import DeleteIcon from '../../../../assets/icons/delete_icon.svg'
import CloseIcon from '../../../../assets/icons/close_icon.svg'

export default function ShoppingCart(props){
    
    return (
        <Conteiner>
            <Modal>
                <div className="HeaderModal">
                    <Tittle size="100">Carrinho</Tittle>
                    <span onClick={() => props.changeShoppingCart()} className="closeButton">
                        <img src={CloseIcon} />
                    </span>
                </div>

                <div className="gridItens">
                    {
                        props.cartItens !== undefined && props.cartItens.length > 0 
                            ?
                                props.cartItens.map( x =>
                                    <div className="itemProduct">
                                        <span className="product-image">
                                            <img src={x.image} />
                                        </span>

                                        <Text size="25" className="product-description">
                                            {x.description}
                                        </Text>

                                        <InputSpinner number={x.mount} className="inputSpinner" />
                                        
                                        <span onClick={() => props.removeItem(x.key)} className="remove-item">
                                            <img src={DeleteIcon} />
                                        </span>
                                    </div>
                                )
                            : <Tittle size="120" className="itens-not-found" >Itens não Adicionados</Tittle>
                    }
                </div>

                <div className="container-buttons">
                    <Button onClick={() => props.changeShoppingCart()} width="300px" fontSize="20" border="4px solid" height="50px" >Continuar Comprando</Button>
                </div>
            </Modal>
        </Conteiner>
    )
}
