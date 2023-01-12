import styled from "styled-components";

const NavBar = styled.nav`
    display: flex;
    width: auto;
    height: 4rem;
    padding: 2rem 2rem;
    justify-content: space-between;
    align-items: center;
    background-color: #544b4ba7;
    border-radius: 6px;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    @media screen and (max-width: 768px) {
        flex-direction: column;
        height: auto;
        margin-top: 1rem;
        padding: 1rem 0.5rem;
    }
`

export default NavBar;