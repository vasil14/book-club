import { useState, useContext } from "react";
import { Tooltip } from "antd";
import { Eye, Heart, Star, Books } from "@phosphor-icons/react";
import BookContext from "@/Context/BookContext";

const SingleBookInfo = ({ book }) => {
    const { executeScroll } = useContext(BookContext);
    const [show, setShow] = useState(false);
    const [read, setRead] = useState(false);
    const [like, setLike] = useState(false);
    const [readList, setReadList] = useState(false);

    const readListToggler = () => {
        setReadList((previousState) => !previousState);
    };

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
                        onClick={executeScroll}
                        className="cursor-pointer text-teal-400 text-sm font-semibold"
                    >
                        [+] Read more
                    </span>
                    <div className="flex flex-row items-center pt-5">
                        <div className="w-28 h-24 hover:bg-teal-50 cursor-pointer pt-4">
                            <div className="flex flex-col items-center ">
                                <div className="w-[40px] h-[40px] mx-auto">
                                    <Star
                                        size={30}
                                        className="text-teal-400 mx-auto"
                                        weight="fill"
                                    />
                                </div>
                                <div>Review</div>
                            </div>
                        </div>
                        <div
                            className="w-28 h-24 hover:bg-teal-50 cursor-pointer pt-4"
                            onClick={readToggler}
                        >
                            {read ? (
                                <div className="flex flex-col items-center">
                                    <div className="w-[40px] h-[40px] mx-auto">
                                        <Eye
                                            size={40}
                                            className="text-teal-400  mx-auto"
                                            weight="fill"
                                        />
                                    </div>
                                    <div>Remove</div>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center cursor-pointer">
                                    <div className="w-[40px] h-[40px] mx-auto">
                                        <Eye
                                            size={40}
                                            className="text-teal-400 mx-auto"
                                            weight="light"
                                        />
                                    </div>
                                    <div>Read</div>
                                </div>
                            )}
                        </div>
                        <div
                            className="w-28 h-24 hover:bg-teal-50 cursor-pointer pt-4"
                            onClick={likeToggler}
                        >
                            {like ? (
                                <div className="flex flex-col items-center">
                                    <div className="w-[40px] h-[40px] mx-auto">
                                        <Heart
                                            size={30}
                                            className="text-teal-400 mx-auto"
                                            weight="fill"
                                        />
                                    </div>
                                    <div>Remove</div>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center">
                                    <div className="w-[40px] h-[40px] mx-auto">
                                        <Heart
                                            size={30}
                                            className="text-teal-400 mx-auto"
                                        />
                                    </div>
                                    <div>Like</div>
                                </div>
                            )}
                        </div>
                        <div
                            className="w-28 h-24 hover:bg-teal-50 cursor-pointer pt-4"
                            onClick={readListToggler}
                        >
                            {readList ? (
                                <div className="flex flex-col items-center">
                                    <div className="w-[40px] h-[40px] mx-auto">
                                        <Books
                                            size={40}
                                            className="text-teal-400 mx-auto"
                                            weight="fill"
                                        />
                                    </div>
                                    <div>Remove</div>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center">
                                    <div className="w-[40px] h-[40px] mx-auto">
                                        <Books
                                            size={40}
                                            className="text-teal-400 mx-auto"
                                            weight="thin"
                                        />
                                    </div>
                                    <div>Read List</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBookInfo;
