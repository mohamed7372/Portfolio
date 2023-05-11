import Button from "../components/ui/Button";
import Logo from '../assets/img/logo.png'

const NavBar = () => {
    return (
        <nav className="shadow-lg">
            <div className="responsive w-full h-50 flex justify-between items-center py-4">
                
                <img src={ Logo} alt="" className="w-20"/>
                {/* <h1 className="font-extrabold text-xl">BENRABAH.Mohamed</h1> */}
                <ul className="flex text-sm">
                    <li className="px-4 py-2 text-secondary-100 cursor-pointer hover:text-primary-200 hidden lg:flex items-center transition duration-300 ease-in">
                        <a href="#about">
                            <span className="text-primary-200 font-medium mr-1">01.</span>
                            About
                        </a>
                    </li>
                    <li className="px-4 py-2 text-secondary-100 cursor-pointer hover:text-primary-200 hidden lg:flex items-center transition duration-300 ease-in">
                        <a href="#experience">
                            <span className="text-primary-200 font-medium mr-1">02.</span>
                            Experience
                        </a>
                    </li>
                    <li className="px-4 py-2 text-secondary-100 cursor-pointer hover:text-primary-200 hidden lg:flex items-center transition duration-300 ease-in">
                        <a href="#project">
                            <span className="text-primary-200 font-medium mr-1">03.</span>
                            Project
                        </a>
                    </li>
                    <li className="px-4 py-2 mr-10 text-secondary-100 cursor-pointer hover:text-primary-200 hidden lg:flex items-center transition duration-300 ease-in">
                        <a href="#contact">
                            <span className="text-primary-200 font-medium mr-1">04.</span>
                            Contact
                        </a>
                    </li>
                    <li className="">
                        <Button name_btn='Resume' padding='px-3 py-2' />
                    </li>
                </ul>
            </div>
        </nav>
    );
}
 
export default NavBar;