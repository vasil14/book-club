import { useState } from "react";
import { logo } from "../../../assets/images";
import { navLinks } from "../../../assets/constants";
import AccountDropdown from "./AccountDropdown";
import AccountSidebar from "./AccountSidebar";

const Navbar = ({ auth }) => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen((previousState) => !previousState);
    };
    return (
        <nav className="h-full border-b-2">
            <div className="max-w-screen-2xl mx-auto h-20 items-center flex flex-row justify-between px-10">
                <div className="w-full flex flex-row gap-10 items-center py-5">
                    <img src={logo} alt="book-club-logo" className="h-12" />
                    {navLinks?.map((item) => (
                        <div
                            key={item.id}
                            className="text-black text-lg font-sans font-semibold pt-3"
                        >
                            {item.title}
                        </div>
                    ))}
                </div>
                <AccountDropdown toggleOpen={toggleOpen} />
            </div>
            <AccountSidebar auth={auth} toggleOpen={toggleOpen} open={open}/>
        </nav>
    );
};

export default Navbar;
