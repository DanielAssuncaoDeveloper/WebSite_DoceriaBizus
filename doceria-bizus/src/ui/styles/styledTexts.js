import styled from "styled-components";

const Tittle = styled.h1`  
    font-family: "Corinthia", cursive;
    font-weight: 400;
    font-style: normal;

    margin: 0;
    font-size: ${props => props.size !== undefined ? props.size : "150"}px;
    color: ${props => props.color !== undefined ? props.color : "#FFE5D2"};
`

const Text = styled.a`
    font-family: "EB Garamond", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    display: flex;

    width: ${props => props.width !== undefined ? props.width : "auto"};
    font-size: ${props => props.size !== undefined ? props.size : "150"}px;
    color: ${props => props.color !== undefined ? props.color : "#FFE5D2"};
`

const Price = styled.span`
    font-family: "Fraunces", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings:
        "SOFT" 0,
        "WONK" 0;

    font-size: ${props => props.size !== undefined ? props.size : "150"}px;
    color: ${props => props.color !== undefined ? props.color : "#FFE5D2"};
`

export { Tittle, Text, Price }