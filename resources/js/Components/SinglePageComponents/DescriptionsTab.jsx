import React from "react";

const DescriptionsTab = ({ description }) => {
    return (
        <div className="flex flex-col gap-5 pt-5 max-w-[870px]">
            <div className="uppercase font-semibold">description</div>
            <div>{description}</div>
        </div>
    );
};

export default DescriptionsTab;
