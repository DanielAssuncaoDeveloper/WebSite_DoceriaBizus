import {Button} from '../../styles/styledInputs'

import { Modalparagrafo,ModalContent, Modal, ModalCButton,GoToCart,ContinueShopping } from './styled'

export default function ModalCarrinho() {
    return (
        <Modal>
            <ModalContent>
                <ModalCButton>&times;</ModalCButton>
                <Modalparagrafo>Pedido adicionado ao Carrinho com Sucesso!</Modalparagrafo>
                <GoToCart>Ir para o Carrinho</GoToCart>
                <ContinueShopping> Continuar Comprando</ContinueShopping>
            </ModalContent>
        </Modal>
    )
}