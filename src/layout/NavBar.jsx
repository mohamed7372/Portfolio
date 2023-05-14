import axios from 'axios'
import fileDownload from 'js-file-download'
import Notification from '../components/ui/Notification'
import Button from "../components/ui/Button";
import Logo from '../assets/img/logo.png'
import { useEffect, useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const NavBar = () => {
    const [notification, showNotification] = useState(false)
    const [hideNot, setHideNot] = useState(false)

    useEffect(() => {
        AOS.init({duration:2000});
    }, [])

    const handleDownload = (url, filename) => {
        axios.get(url, {
            responseType: 'blob',
        })
        .then((res) => {
            fileDownload(res.data, filename)

            showNotification(true)
            setTimeout(() => {
                setHideNot(true)
            }, 3000);
            setTimeout(() => {
                setHideNot(false)
                showNotification(false)
            }, 3500);
        })
    }
    
    return (
        <nav className="shadow-lg">
            {notification
                &&
                <div className={ hideNot ? 'animate-hide' : ''}>
                    <Notification
                        title={'Successfully Downloaded!'}
                        body={'Thank you for download my resume.'} />
                </div>
            }
            <div className="responsive w-full h-50 flex justify-between items-center py-4">
                
                <img src={ Logo} alt="" className="w-20" data-aos='fade-out'/>
                {/* <h1 className="font-extrabold text-xl">BENRABAH.Mohamed</h1> */}
                <ul className="flex text-sm">
                    <li data-aos='zoom-in' className="px-4 py-2 text-secondary-100 cursor-pointer hover:text-primary-200 hidden lg:flex items-center transition duration-300 ease-in">
                        <a href="#about">
                            <span className="text-primary-200 font-medium mr-1">01.</span>
                            About
                        </a>
                    </li>
                    <li data-aos='zoom-in' className="px-4 py-2 text-secondary-100 cursor-pointer hover:text-primary-200 hidden lg:flex items-center transition duration-300 ease-in">
                        <a href="#experience">
                            <span className="text-primary-200 font-medium mr-1">02.</span>
                            Experience
                        </a>
                    </li>
                    <li data-aos='zoom-in' className="px-4 py-2 text-secondary-100 cursor-pointer hover:text-primary-200 hidden lg:flex items-center transition duration-300 ease-in">
                        <a href="#project">
                            <span className="text-primary-200 font-medium mr-1">03.</span>
                            Project
                        </a>
                    </li>
                    <li data-aos='zoom-in' className="px-4 py-2 mr-10 text-secondary-100 cursor-pointer hover:text-primary-200 hidden lg:flex items-center transition duration-300 ease-in">
                        <a href="#contact">
                            <span className="text-primary-200 font-medium mr-1">04.</span>
                            Contact
                        </a>
                    </li>
                    <li data-aos='zoom-in' className="">
                        <Button name_btn='Resume' padding='px-3 py-2'
                            handleBtn={() => handleDownload('../../BENRABAH Mohamed CV-FR v-2.7.pdf', 'BENRABAH Mohamed CV-FR.pdf')}/>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
 
export default NavBar;