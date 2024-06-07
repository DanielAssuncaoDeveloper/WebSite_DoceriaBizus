import styled from "styled-components";

export const ButtonArrow = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 5px;

    width: 50px;
    height: 45px;

    border-radius: 100%;
    border: none;
    background-color: #863E17;

    text-align: center;
    cursor: pointer;

    img {
        width: 22px;
        transform: rotate(${props => props.direction === 'RIGTH' ? '180deg' : '0deg'});
        
        margin-left: ${props => props.direction == 'RIGTH' ? '3px' : '0' };
    }

`