import styled from "styled-components";

const Sec = styled.div`
    margin: 0 auto 80px;
    padding: 60px 90px;
    width: 80%;
    height: 300px;
    border-radius: 20px;
    background: rgb(255,153,0);
    background: linear-gradient(180deg, rgba(255,153,0,0.15) 0%, rgba(255,153,0,0.2) 100%);
`;

function Section() {
    return (
        <Sec>
            <img src="" alt="none" />
            <h3>Web Dev</h3>
            <p>I build and activate brands throung <br />cultural insigh &and; strategix vision</p>
            <a href="">see projects</a>
        </Sec>
    );
}

export default Section;