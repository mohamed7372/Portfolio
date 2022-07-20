import styled from "styled-components";

const Nav = styled.div`
    padding: 20px 40px;
    display: flex;
`;
const Info = styled.ul`
    width: 70%;
    display: flex;
`;
const LogoName = styled.p`
    font-weight: 900;
    text-transform: uppercase;
    width: 15%;
`;
const Profession = styled.li`
    margin-right: 80px;
    text-transform: capitalize;
    color: var(--grey-color);
    font-size: 10px;
    font-weight: 500;
    width: 4ch;
`;
const Item = styled.li`
    text-transform: uppercase;
    margin: 0 15px;
`;
const Separator = styled.li`
    color: var(--grey-color);
    font-size: 12px;
    margin-top: 2px;
`;
const Href = styled.a`
    text-decoration: none;
    color: black;
    font-size: 10px;
    font-weight: 600;
`;

function NavBar() {
    return (
        <Nav>
            <LogoName>benrabah</LogoName>
            <Info>
                <Profession>software engineer</Profession>
                <Item><Href href="tel:+213778013110">call me. (+213) 778-013-110</Href></Item>
                <Separator>/</Separator>
                <Item><Href href="mailto:benrabahmohamed530@gmail.com">benrabahmohamed530@gmail.com</Href></Item>
            </Info>
        </Nav>
    );
}

export default NavBar;