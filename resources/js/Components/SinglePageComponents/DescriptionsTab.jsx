import React from "react";

const DescriptionsTab = ({ description }) => {
    return (
        <div className="flex flex-col gap-5 pt-5 w-full max-w-[850px] pl-5">
            <div className="uppercase font-semibold text-base">description</div>
            <div className="leading-7 text-base">{description}</div>
        </div>
    );
};

export default DescriptionsTab;
