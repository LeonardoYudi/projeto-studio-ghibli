import styled from "styled-components";
import Play from "../assets/img/arrow.png"

const FirstButton = (props) => {
    return(
        <Button>
            <ArrowButton/>
            <ButtonText href={props.link} target="_blank">Assistir Agora</ButtonText>
        </Button>
    )
}

export default FirstButton;

export const ArrowButton = styled.img.attrs({ src: Play })`
    margin-right: 0.1rem; 
    height: 24px;
`;

export const Button = styled.button`
   width: 12rem;
   background: none;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 0.3rem 0.6rem;
   border: 2px solid black;
   border-radius: 6px;
   transition-duration: 0.4s;
   cursor: pointer;

    img{
        transition-duration: 0.4s;
        transform: rotate(90deg);
    }
    :hover{
        img{
            transform: rotate(180deg);
        }
        p{
            font-weight: bolder;
        }
    }
  
`

export const ButtonText = styled.a`
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    transition: 200ms linear;
    text-decoration: none;
    list-style: none;
    color: black;
    :visited{
        color: black;
    }
`