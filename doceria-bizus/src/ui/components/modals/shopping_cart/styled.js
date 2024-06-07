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


`