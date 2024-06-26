import styled from "styled-components";
import bannerBackground from '../../../assets/pictures/banner.jpeg';

export const DivAlt = styled.div`
    background-image: url(${bannerBackground});
    background-size: 1980px 532px;
    background-repeat: no-repeat;
    background-size: cover;

    height: 450px;

    display: flex;
    justify-content: start;
`;

export const DivContent = styled.div`
    padding: 0 90px;
    padding-top: 20px;

    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;

    .tittle-container{
        margin-top: 50px;
        height: 30px;
    }
`;

export const SubTitle = styled.p`
    font-family: "EB Garamond";
    font-size: 29px;
    color: white;
    max-width: 724px;
    margin: 0;
    margin-left: 8pc;
`;

export const ImageDiv = styled.div`
    display: flex;
    padding-top: 5pc;

    margin-bottom: -100px;
`;

export const Image = styled.img`
    width: 300px;
    height: 450px;

    object-fit: cover;

`;