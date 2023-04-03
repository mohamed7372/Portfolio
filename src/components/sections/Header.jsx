import Button from "../ui/Button";

const Header = () => {
    return (
        <div className="responsive min-h-screen flex flex-col justify-center -mt-10 w-full">
            <h6 className="text-primary-200 tracking-widest text-sm">Hi, my name is</h6>
            <h1 className="text-secondary-100 font-extrabold text-7xl mt-8 mb-4">BENRABAH Mohamed.</h1>
            <h1 className="text-5xl font-bold mb-8">I build things for the web.</h1>
            <p>
                I’m a
                <span className="text-secondary-100 hover:underline hover:text-primary-200 cursor-pointer"> software engineer </span>
                specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible.</p>
            <div className="mt-10">
                <a href="#contact">
                    <Button
                        name_btn='Hire Me!'
                        padding='px-6 py-3' />
                </a>
            </div>
        </div>
    );
}

export default Header;