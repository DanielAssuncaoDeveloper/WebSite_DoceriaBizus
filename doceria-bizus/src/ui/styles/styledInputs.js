import styled from "styled-components";

const Button = styled.button`
    width: ${props => props.width !== undefined ? props.width : "auto" };
    height: ${props => props.height !== undefined ? props.height : "auto" };

    font-family: "EB Garamond", serif;
    font-size: ${props => props.fontSize !== undefined ? props.fontSize : "16" }px;
    font-weight: ${props => props.fontWeight !== undefined ? props.fontWeight : "600" };
    color: ${props => props.colorText !== undefined ? props.colorText : "#863E17" };

    background-color: ${props => props.backgrounColor !== undefined ? props.backgrounColor : "#FFE5D2" };
    border-radius: ${props => props.borderRadius !== undefined ? props.borderRadius : "7px" };
    border: ${props => props.border !== undefined ? props.border : "none" };
    box-shadow: ${props => props.boxShadow !== undefined ? props.boxShadow : "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;" };

    cursor: pointer;
`

export {Button}