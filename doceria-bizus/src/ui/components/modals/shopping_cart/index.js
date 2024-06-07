import React from "react";
import { useState } from "react";

import { Conteiner, Modal } from "./styled.js";

import { Button } from "../../../styles/styledInputs.js";
import { Tittle } from '../../../styles/styledTexts.js'

import InputSpinner from '../../../styles/input/spinner/index.js'

import DeleteIcon from '../../../../assets/icons/delete_icon.svg'
import CloseIcon from '../../../../assets/icons/close_icon.svg'

export default function ShoppingCart(props){
    return (
        <Conteiner>
            <Modal>
                <div className="HeaderModal">
                    <Tittle size="100">Carrinho</Tittle>
                    <span className="closeButton">
                        <img src={CloseIcon} />
                    </span>
                </div>

                <div className="gridItens">
                    {
                        props.cartItens !== undefined && props.cartItens.length > 0 
                            ?
                                props.cartItens.map( x =>
                                    <div className="item">
                                        <span className="product-image">
                                            <img src={x.image} />
                                        </span>

                                        <span className="product-description">
                                            {x.description}
                                        </span>

                                        <InputSpinner />
                                        
                                        <span className="remove-item">
                                            <img src={DeleteIcon} />
                                        </span>
                                    </div>
                                )
                            : ""
                    }
                </div>

                <div className="container-buttons">
                    <Button>Continuar Comprando</Button>
                </div>
            </Modal>
        </Conteiner>
    )
}
