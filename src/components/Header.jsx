import Button from "./ui/Button";

const Home = () => {
    return (
        <div>
            <h6>Hi, my name is</h6>
            <h1>BENRABAH Mohamed.</h1>
            <h1>I build things for the web.</h1>
            <p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
            <Button name_btn='Hire me!' padding_left_right={20} padding_top_bottom={20}/>
        </div>
    );
}
 
export default Home;