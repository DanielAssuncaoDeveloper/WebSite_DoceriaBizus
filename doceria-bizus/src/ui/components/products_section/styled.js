import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFE5D2;
    padding: 60px 40px;
    
    .tittleSection{
        width: 280px;
    }    

    .lineTittle{
        width: 100%;
        height: 3px;
        margin-top: -20px;

        border-radius: 10px;
        background-color: #863E17;
    }

    .productsSection{
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-top: 50px;
    }

    .productSlider{
        width: 100%;

        display: flex;
        justify-content: space-evenly;
        align-items: center
    }

`