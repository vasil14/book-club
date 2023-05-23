import { User } from "@phosphor-icons/react";

const AccountDropdown = ({ toggleOpen }) => {
    return (
        <div className="" onClick={toggleOpen}>
            <User size={25} className="hover:text-teal-400" />
        </div>
    );
};

export default AccountDropdown;
