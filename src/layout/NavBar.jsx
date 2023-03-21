import Button from "../components/ui/Button";

const NavBar = () => {
    return (
        <nav className="shadow-lg">
            <div className="responsive w-full h-50 flex justify-between items-center py-4">
                {/* <img src="" alt="logo" /> */}
                <h1 className="font-extrabold text-xl">Benrabah.M</h1>
                <ul className="flex text-sm">
                    <li className="px-4 py-2 text-secondary-100 cursor-pointer hover:text-primary-200 flex items-center">
                        <span className="text-primary-200 font-medium mr-1">01.</span>
                        About
                    </li>
                    <li className="px-4 py-2 text-secondary-100 cursor-pointer hover:text-primary-200 flex items-center">
                        <span className="text-primary-200 font-medium mr-1">02.</span>
                        Experience
                    </li>
                    <li className="px-4 py-2 text-secondary-100 cursor-pointer hover:text-primary-200 flex items-center">
                        <span className="text-primary-200 font-medium mr-1">03.</span>
                        Work
                    </li>
                    <li className="px-4 py-2 text-secondary-100 cursor-pointer hover:text-primary-200 flex items-center">
                        <span className="text-primary-200 font-medium mr-1">04.</span>
                        Contact
                    </li>
                    <li className="px-4 py-2">
                        <Button name_btn='Resume' padding_left_right={4} padding_top_bottom={2} />
                    </li>
                </ul>
            </div>
        </nav>
    );
}
 
export default NavBar;