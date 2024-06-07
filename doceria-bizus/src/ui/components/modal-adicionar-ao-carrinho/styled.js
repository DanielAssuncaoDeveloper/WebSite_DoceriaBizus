import styled from "styled-components";

export const Modalparagrafo = styled.p `

    font-size: 42px;
    font-weight: 400;
    line-height: 51.79px;
    text-align: center;
    `
export const ModalContent = styled.div `
    box-sizing: border-box;
    position: relative;
    width: 572px;
    height: 338px;
    background: linear-gradient(108.69deg, #FFE5D2 10.79%, #D4A07B 97.17%);
    border: 5px solid #642806;
    border-radius: 15px;
    justify-content: center;   
` 
export const Modal = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 100%;
    font-family: Fraunces;
    color: rgba(134, 62, 23, 1)

`
export const ModalCButton = styled.span `
    position: absolute;
    top: 10px;
    right: 10px;
    color: #000;
    font-size: 20px;
    cursor: pointer;
`

   

export const GoToCart = styled.button `
    background-color: #f5e8de;
    border: 4px solid #aa7d52;
    position: absolute;
    width: 501px;
    height: 60px;
    left: 35px;
    top: 177px;
    background: #FFE5D2;
    border: 3px solid #863E17;
    border-radius: 7px;
    font-size: 32px;
    color: #863e17;
    font-family: Fraunces;
    cursor: pointer;
    display: block;
    font-weight: 600;
`
export const ContinueShopping = styled.button `
    position: absolute;
    width: 501px;
    height: 60px;
    left: 35px;
    top: 247px;
    background: #863E17;
    border: 3px solid #863E17;
    border-radius: 7px;
    font-size: 32px;
    color: rgb( 255, 229, 210, 1);
    font-family: Fraunces;
=    cursor: pointer;
    display: block;
    font-weight: 600;
`