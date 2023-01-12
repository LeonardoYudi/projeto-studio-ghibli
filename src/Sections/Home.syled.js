import styled from "styled-components";

const HomeSectionChihiro = styled.section`
    width: 100vw;
    height: 100vh;
    background: ${props=>props.temaSection};

    @media screen and (max-width: 950px) {
       height: auto;
    }
`

export default HomeSectionChihiro;

export const HeaderDiv = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: space-between;
    padding: 1rem 4rem;
    align-items: center;

    @media screen and (max-width: 950px) {
        flex-direction: column;
    }
`

export const HomeImg = styled.img`
    max-width: 500px;
    max-height: 400px;
    @media screen and (max-width: 950px) {
        max-width: 350px;
        max-height: 300px;
    }
`

export const ImgDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    margin: 4rem 10rem;

    @media screen and (max-width: 1100px) {
        height: auto;
        margin: 0rem 4rem;
    }

    @media screen and (max-width: 950px) {
        flex-direction: column-reverse;
        margin: 0rem 0rem;
    }
`

export const ContainerDiv = styled.div`
    height: 50vh;
    padding: 0.5rem 1.5rem;
    max-width: 450px;

    @media screen and (max-width: 1100px) {
        height: auto;
    }

    @media screen and (max-width: 950px) {
        height: auto;
    }
    
`

export const NameTitle = styled.h2`
    font-weight: 700;
    margin-bottom: 0.3rem;
    font-size: 1.3rem;
    @media screen and (max-width: 950px) {
        font-size: 1.3rem;
        text-align: center;
    }
`

export const MainTitle = styled.h1`
    font-weight: 900;
    font-size: 3.5rem;
    line-height: 3.815rem;
    color: white;
    @media screen and (max-width: 950px) {
        font-size: 2rem;
        line-height: 1.8rem;
        text-align: center;
    }
`

export const MainTitleDiv = styled.div`
    width: auto;
    margin-bottom: 0.6rem;
`;

export const TextSection = styled.p`
    font-weight: 400;
    font-size: 1rem;

    @media screen and (max-width: 1100px) {
        height: auto;
    }

    @media screen and (max-width: 950px){
        text-align: center;
    }

`

export const ButtonDiv = styled.div`
    margin: 1rem 0rem;
    
    @media screen and (max-width: 950px){
        display: flex;
        justify-content: center;
    }
`

