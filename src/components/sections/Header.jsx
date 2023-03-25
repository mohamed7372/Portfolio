import Button from "../ui/Button";

const Header = () => {
    return (
        <div className="responsive h-screen flex flex-col justify-center -mt-20 w-full">
            <h6 className="text-primary-200 tracking-widest text-sm">Hi, my name is</h6>
            <h1 className="text-secondary-100 font-extrabold text-7xl mt-8 mb-4">BENRABAH Mohamed.</h1>
            <h1 className="text-5xl font-bold mb-8">I build things for the web.</h1>
            <p>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at
                <span className="text-secondary-100 hover:underline hover:text-primary-200 cursor-pointer"> Upstatement</span>.</p>
            <div className="mt-16">
                <Button
                    name_btn='Check out my course!'
                    padding_left_right={'10'} padding_top_bottom={4}/>
            </div>
        </div>
    );
}

export default Header;