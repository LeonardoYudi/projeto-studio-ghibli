import FirstButton from "../Components/FirstButton";
import Logo from "../Components/Logo"
import NavBar from "../Components/NavBar";
import NavLink from "../Components/NavLink";
import logo from "../assets/icons/logo.svg"

import HomeSection,{
    HeaderDiv,
    HomeImg,
    ImgDiv,
    InfoContainer,
    ContainerDiv,
    NameTitle,
    MainTitle,
    MainTitleDiv,
    TextSection,
    ButtonDiv
}from"./Home.syled";


const HomeChihiro = (props) =>{
    return(
        <>
            <HomeSection temaSection={props.tema.main}>
                <HeaderDiv>
                    <Logo src={logo}/>
                    <NavBar>
                        <NavLink href="/">A Viagem de Chihiro</NavLink>
                        <NavLink href="/Castelo">O Castelo Animado</NavLink>
                        <NavLink href="/Totoro">Meu Amigo Totoro</NavLink>
                    </NavBar>
                </HeaderDiv>
                <InfoContainer>
                    <ImgDiv>
                        <HomeImg src={props.imgPrincipal}  alt="Imagem Principal"/>
                    </ImgDiv>
                    <Container infos = {props.tema}/>
                </InfoContainer>
            </HomeSection>
        </>
    )
}

export default HomeChihiro;


export const Container = (props) =>{
    return(
       <>
            <ContainerDiv>
                <NameTitle>{props.infos.autor}</NameTitle>
                <MainTitleDiv>
                    <MainTitle>
                        {props.infos.titulo1}<br/>
                        {props.infos.titulo2}
                    </MainTitle>
                </MainTitleDiv>
                <TextSection>
                    {props.infos.sinopse}   
                </TextSection>
                <ButtonDiv>
                    <FirstButton link={props.infos.link}/>
                </ButtonDiv>
            </ContainerDiv>
       </>
    )
}
