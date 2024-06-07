import styled from "styled-components";

export const Conteiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    backdrop-filter: blur(2px);

    position: fixed;
    top: 0px;
`

export const Modal = styled.div`
    width: 1000px;
    height: 600px;

    background: rgb(134,62,23);
    background: linear-gradient(180deg, rgba(134,62,23,1) 40%, rgba(181,96,50,1) 100%);

    border: #863E17 solid 4px;
    border-radius: 10px;

    .HeaderModal{
        display: flex;
        justify-content: space-between;

        h1 {
            margin-left: 30px;
        }
    }

    .closeButton{
        margin-top: 20px;
        margin-right: 20px;

        cursor: pointer;
    }

    .gridItens{
        margin-top: 50px;
        height: 300px;
    }

    .itemProduct{
        margin-top: 20px;

        display: flex;
        justify-content: space-around;
        align-items: stretch;

    }

    .product-description{
        flex-grow: 2;
        display: flex;
        align-items: center;
        justify-content: start;
        margin-left: 20px;
    }

    .product-image{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;

        img{
            height: 70px;
        }
    }
    
    .inputSpinner{
        flex-grow: 2;
    }

    .remove-item{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;

        cursor: pointer;

        img {
            height: 35px;
        }

    }

    .container-buttons{
        width: 100%;
        display: flex;
        justify-content: center;
        
        margin-top: 50px;
    }

    .itens-not-found{
        width: 100% !important;

        text-align: center;
    }

`