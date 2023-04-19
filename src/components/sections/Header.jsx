import Button from "../ui/Button";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useEffect } from "react";

const Header = () => {
    useEffect(() => {
        AOS.init({duration:4000});
    }, [])

    return (
        <div className="responsive min-h-screen flex flex-col justify-center -mt-10 w-full" data-aos='fade-in'>
            <h6 className="text-primary-200 tracking-widest text-sm">Hi, my name is</h6>
            <h1 className="text-secondary-100 font-extrabold text-4xl md:text-7xl mt-8 mb-4">BENRABAH Mohamed.</h1>
            <h1 className="text-2xl md:text-5xl font-bold mb-8">I build things for the web.</h1>
            <p>
                I’m a 
                <span className="mx-2 text-secondary-100 hover:underline hover:text-primary-200 cursor-pointer transition duration-300 ease-in">software engineer</span>
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