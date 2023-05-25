import SingleBookImage from "./SingleBookImage";
import SingleBookInfo from "./SingleBookInfo";
import BookTabs from "./BookTabs";
import BookContext from "@/Context/BookContext";
import { useContext } from "react";

const BookMainInfo = ({ book }) => {
    const { test } = useContext(BookContext);
    console.log(test);
    return (
        <div className="w-3/4">
            <div className="flex flex-row border-b-2 pb-10 mr-5">
                <SingleBookImage book={book} />
                <SingleBookInfo book={book} />
            </div>
            <div className="flex h-[100px]">
                <BookTabs book={book} />
            </div>
        </div>
    );
};

export default BookMainInfo;
