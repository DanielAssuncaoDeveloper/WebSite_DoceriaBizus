import styled from "styled-components";
import bannerBackground from '../../../assets/pictures/banner.jpeg';

export const DivAlt = styled.div`
    background-image: url(${bannerBackground});
    background-size: 1980px 532px;
    background-repeat: no-repeat;
    height: 100vh;
    width; 60%;
    display: flex;
    justify-content: start;
    
    @media (max-width: 1450px){
        height: 50vh;
    }
    
    @media (max-width: 1320px){
        height: 45vh;
    }

    @media (max-width: 900px){
        height: 35vh;
    }

    @media (max-width: 520px){
        height: 14.2vh;
    }
`;

export const DivContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const DivTitle = styled.div`
    @media (max-width: 1175px){
        width: 100%;
    }
`;

export const Title = styled.h1`
    font-family: "Corinthia";
    font-size: 150px;
    color: white;
    margin-left: 6pc;
    margin-bottom: 0pc;

    @media (max-width: 1320px){
        font-size: 125px;
    }

    @media (max-width: 1175px){
        margin-left: 0;
        text-align: center;
    }

    @media (max-width: 900px){
        font-size: 90px;
    }

    @media (max-width: 520px){
        font-size: 50px;
        margin: 0;
        margin-top: 2pc;
        text-align: center;
    }
`;

export const SubTitle = styled.p`
    font-family: "EB Garamond";
    font-size: 29px;
    color: white;
    max-width: 724px;
    margin: 0;
    margin-left: 8pc;

    @media (max-width: 1320px){
        font-size: 23px;
        max-width: 600px;
    }

    @media (max-width: 1175px){
        margin: 0 auto;
    }

    @media (max-width: 900px){
        max-width: 460px;
        font-size: 17px;
        margin: 0 auto;
    }

    @media (max-width: 520px){
        display: none;
    }
`;

export const ImageDiv = styled.div`
    display: flex;
    padding-right: 7pc;
    padding-top: 5pc;

    @media (max-width: 1450px){
        padding-right: 5pc;
    }

    @media (max-width: 1320px){
        padding-right: 4pc;
    }

    @media (max-width: 1175px){
        display: none;
    }
`;

export const Image = styled.img`
    width: 436px;
    height: 547px;
    object-fit: cover;

    @media (max-width: 1450px){
        width: 336px;
        height: 447px;
    }

    @media (max-width: 1320px){
        height: 276px;
        height: 387px;
    }
`;