import styled from "styled-components";

const NavLink = styled.a`
    width: auto;
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
    color: white;
    margin-right: 1rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 6rem;
    transition: all 0.3s;
    :hover{
        background-color: gray;
        box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    }

    @media screen and (max-width: 768px) {
        text-align: center;
        margin: 0;
    }
`

export default NavLink;