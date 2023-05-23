import React from "react";
import { EyeFilled, OrderedListOutlined, HeartFilled } from "@ant-design/icons";
import { Tooltip } from "antd";
const SingleBookImage = ({ book }) => {
    return (
        <div className="w-1/3 mx-10 ">
            <div className="w-52 mx-auto flex flex-col gap-3">
                <img src={book[0]?.image} alt={book[0]?.image} />
                <div className="flex flex-row gap-3 items-center mx-auto">
                    <Tooltip title="Read by 2.7k members" color="gray">
                        <div className="flex gap-1 items-center">
                            <EyeFilled className="text-md" />
                            <p className="text-xs cursor-default">2.7K</p>
                        </div>
                    </Tooltip>
                    <Tooltip title="Appears in 800 lists" color="gray">
                        <div className="flex flex-row items-center gap-1">
                            <OrderedListOutlined className="text-xs pb-1" />
                            <p className="text-xs cursor-default">800</p>
                        </div>
                    </Tooltip>
                    <Tooltip title="Liked by 1.5k members" color="gray">
                        <div className="flex gap-1 items-center">
                            <HeartFilled className="text-sm" />
                            <p className="text-xs cursor-default">1.5K</p>
                        </div>
                    </Tooltip>
                </div>
            </div>
        </div>
    );
};

export default SingleBookImage;
