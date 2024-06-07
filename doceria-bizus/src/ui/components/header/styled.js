import styled from 'styled-components'

export const Container = styled.div`
    margin: 0;
    height: 80px;

    overflow: visible;

    background: rgb(101,40,7);
    background: linear-gradient(90deg, rgba(101,40,7,1) 0%, rgba(181,96,50,1) 100%);

    .shoppingcart-container{
        width: 100%;
        height: 100%;
        
        display: flex;
        justify-content: end;
        align-items: center;

        img{
            margin-right: 30px;
            cursor: pointer;
        }
    }
`

export const LogoContainer = styled.div`
    position: absolute;
    margin: 15px 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 110px;
    height: 110px;

    background-color: #FFE5D2;
    border-radius: 100%;
    border: 4px solid #652807;
`