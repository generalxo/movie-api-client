import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;
    padding-top: 1.25rem;

    h1 {
        padding: 0 1rem .25rem 1rem; 
        text-align: center;
        border-radius: 15px;
        box-shadow: 0px 0px 7px 0px rgba(192, 217, 255, 0.75);

        //Mini animation
        transition: box-shadow 0.15s ease-in-out, transform 0.3s ease-in-out;
        &:hover {
            box-shadow: 0px 0px 13px 0px rgba(150, 192, 255, 0.75);
            transform: scale(1.05);
        };
    };

`;



function Navbar() {
    return (
        <NavbarContainer>
            <Link to={`/`}>
                <h1>Home</h1>
            </Link>
        </NavbarContainer>
    );
}

export default Navbar;