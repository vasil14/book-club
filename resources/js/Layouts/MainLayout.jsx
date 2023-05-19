import Navbar from "@/Components/Navbar/Navbar";
import React from "react";

const MainLayout = ({ children, auth }) => {
    return (
        <>
            <Navbar auth={auth} />
            
            {children}
        </>
    );
};

export default MainLayout;
