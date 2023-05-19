import React from "react";
import { Link, Head } from "@inertiajs/react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const AccountSidebar = ({ auth, toggleOpen, open }) => {
    return (
        <div className="w-full h-full top-0 overflow-hidden">
            <div
                className={`inset-0 fixed h-full w-full bg-gray-900 delay-700 transition-opacity z-40 ${
                    open ? "opacity-50 block" : "opacity-0 hidden"
                }`}
                onClick={toggleOpen}
            ></div>
            <div
                className={`flex flex-col top-0 right-0 fixed w-[400px] bg-white h-full z-50 ${
                    open ? "translate-x-0 block" : "translate-x-full"
                } duration-500 ease-in-out`}
            >
                <div className="px-10 py-5 mb-5 flex flex-row justify-between items-center border-b-2">
                    <div className="flex gap-3 items-center">
                        <PersonOutlineOutlinedIcon style={{ fontSize: 30 }} />
                        <span className="text-xl font-semibold">Account</span>
                    </div>
                    <div
                        className="flex items-center gap-3 cursor-pointer hover:text-emerald-400"
                        onClick={toggleOpen}
                    >
                        <span className="">Close</span>
                        <CloseOutlinedIcon />
                    </div>
                </div>
                {auth.user ? (
                    <Link
                        href={route("dashboard")}
                        className="font-semibold text-white bg-teal-400 border-2 border-transparent hover:text-teal-400 hover:border-teal-400 hover:bg-white rounded-md px-10 py-2 max-w-[300px] w-full mx-auto text-center duration-200"
                    >
                        Dashboard
                    </Link>
                ) : (
                    <div className="flex flex-col gap-5">
                        <Link
                            href={route("login")}
                            className="font-semibold text-white bg-teal-400 border-2 border-transparent hover:text-teal-400 hover:border-teal-400 hover:bg-white rounded-md px-10 py-2 max-w-[300px] w-full mx-auto text-center duration-200"
                        >
                            Log in
                        </Link>
                        <Link
                            href={route("register")}
                            className="font-semibold text-white bg-teal-400 border-2 border-transparent hover:text-teal-400 hover:border-teal-400 hover:bg-white rounded-md px-10 py-2 max-w-[300px] w-full mx-auto text-center duration-200"
                        >
                            Register
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AccountSidebar;
