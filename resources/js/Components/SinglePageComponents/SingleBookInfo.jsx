import { useState } from "react";
import { Rate, Tooltip } from "antd";
import {
    HeartOutlined,
    HeartFilled,
    EyeOutlined,
    EyeFilled,
} from "@ant-design/icons";

const SingleBookInfo = ({ book }) => {
    const [show, setShow] = useState(false);
    const [read, setRead] = useState(false);
    const [like, setLike] = useState(false);

    const readToggler = () => {
        setRead((previousState) => !previousState);
    };

    const likeToggler = () => {
        setLike((previousState) => !previousState);
    };

    const toggler = () => {
        setShow((previousState) => !previousState);
    };
    return (
        <div className="w-2/3 px-10 ">
            <div className="flex flex-col gap-5 px-5">
                <div className="w-full text-4xl ">{book[0].title}</div>
                <div>By author : {book[0]?.author}</div>
                <div className="flex flex-col gap-2 overflow-hidden pr-14">
                    <div>Desription</div>
                    <div className="">
                        {show
                            ? book[0]?.description
                            : book[0]?.description.substring(0, 160) + "..."}
                    </div>
                    <span
                        onClick={toggler}
                        className="cursor-pointer text-teal-400 text-sm font-semibold"
                    >
                        {show ? "[-] Sow less" : "[+] Show more"}
                    </span>
                    <div className="flex flex-row gap-5 items-center">
                        <div className="flex flex-row items-center">
                            <Tooltip title="3">
                                <Rate disabled defaultValue={3}/>
                            </Tooltip>

                            <div className="items-center">3.8</div>
                        </div>
                        <div>
                            {read ? (
                                <EyeOutlined
                                    className="text-teal-400 text-3xl"
                                    onClick={readToggler}
                                />
                            ) : (
                                <EyeFilled
                                    className="text-teal-400 text-3xl"
                                    onClick={readToggler}
                                />
                            )}
                        </div>
                        <div>
                            {like ? (
                                <HeartOutlined
                                    className="text-teal-400"
                                    onClick={likeToggler}
                                />
                            ) : (
                                <HeartFilled
                                    className="text-teal-400"
                                    onClick={likeToggler}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBookInfo;
