import SingleBookImage from "./SingleBookImage";
import SingleBookInfo from "./SingleBookInfo";
import BookTabs from "./BookTabs";

const BookMainInfo = ({ book }) => {
    console.log(book);
    return (
        <div className=" w-3/4">
            <div className="flex flex-row border-b-2 pb-14 mr-5">
                <SingleBookImage book={book} />
                <SingleBookInfo book={book} />
            </div>
            <div className="flex">
                <BookTabs book={book} />
            </div>
        </div>
    );
};

export default BookMainInfo;
