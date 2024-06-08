import { Conteiner, Modalparagrafo, ModalContent, Modal, ModalCButton, GoToCart, ContinueShopping } from './styled'

export default function ModalCarrinho(props) {

    return (
        <Conteiner>
            <Modal>
                <ModalContent>
                    <ModalCButton>&times;</ModalCButton>
                    <Modalparagrafo>Pedido adicionado ao Carrinho com Sucesso!</Modalparagrafo>
                    <GoToCart onClick={() => {
                            props.showModalMarket()
                            props.showShoppingCart()
                        }}
                    >Ir para o Carrinho</GoToCart>
                    <ContinueShopping onClick={() => props.showModalMarket()}> Continuar Comprando</ContinueShopping>
                </ModalContent>
            </Modal>
        </Conteiner>
    )
}