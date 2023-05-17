import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const AccountDropdown = ({ toggleOpen }) => {
    return (
        <div className="" onClick={toggleOpen}>
            <PersonOutlineOutlinedIcon
                className="hover:text-teal-400"
                style={{ fontSize: 35 }}
            />
        </div>
    );
};

export default AccountDropdown;
