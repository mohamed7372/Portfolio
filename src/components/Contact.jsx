import Button from "./ui/Button";

const Contact = () => {
    return (
        <div>
            <h6>04. What's Next?</h6>
            <h1>Get In Touch</h1>
            <p>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
            <Button name_btn='Say Hello' padding_left_right={20} padding_top_bottom={20}/>
        </div>
    );
}
 
export default Contact;