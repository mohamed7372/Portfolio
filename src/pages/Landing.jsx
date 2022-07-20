import styled from "styled-components";
import NavBar from "../components/NavBar";
import Section from "../components/Section";

const Titles = styled.div`
    width: fit-content;
    margin-left: 220px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
    height: 85vh;
`;
const MeImg = styled.img`
    position: absolute;
    right: 120px;
    top: 20vh;
`;
const MyName = styled.h1`
    font-size: 40px;
    width: 10ch;
    margin-bottom: 20px;
`;
const Profession = styled.h5`
    font-weight: 500;
    text-transform: uppercase;
    width: 25ch;
    margin-bottom: 30px;
`;
const Text = styled.p`
    color: var(--grey-color);
    margin-bottom: 60px;
    font-size: 10px;
`;
const ChatBtn = styled.button`
    padding: 10px 18px;
    color: white;
    background-color: var(--main-color);
    border-radius: 10px;
    border: none;
    width: fit-content;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
`;
const IconsRS = styled.ul`
    position: absolute;
    left: 40px;
    bottom: 100px;
    li {
        font-size: 12px;
        margin-bottom: 10px;
        cursor: pointer;
        color: var(--grey-color);
        img {
            width: 20px;
        }
    }
    li:hover{
        color: black;
    }
`;

function Landing() {
    return (
        <div>
            <NavBar />
            <Home />
            <Section/>
            <Section/>
            <Section/>
        </div>
    );
}

export default Landing;

export const Home = () => {
    return (
        <Titles>
            <MeImg src={process.env.PUBLIC_URL + '/assets/images/me.png'} alt="github" />
            <MyName>BENRABAH Mohamed</MyName>
            <Profession>Software Engineer and data scientist</Profession>
            <Text>You are a freelancer and you <br /> love games just like me. Let's shake hands, bro</Text>
            <ChatBtn>let's chat!</ChatBtn>
            <IconsRS>
                <li><img src={process.env.PUBLIC_URL + '/assets/icons/github.svg'} alt="github" /></li>
                <li><img src={process.env.PUBLIC_URL + '/assets/icons/linkedin.svg'} alt="linkedin" /></li>
                <li><img src={process.env.PUBLIC_URL + '/assets/icons/discord.svg'} alt="discord" /></li>
                <li><img src={process.env.PUBLIC_URL + '/assets/icons/youtube.svg'} alt="youtube" /></li>
                <li><img src={process.env.PUBLIC_URL + '/assets/icons/facebook.svg'} alt="facebook" /></li>
                <li><img src={process.env.PUBLIC_URL + '/assets/icons/instagram.svg'} alt="instagram" /></li>
            </IconsRS>
        </Titles>
    )
}