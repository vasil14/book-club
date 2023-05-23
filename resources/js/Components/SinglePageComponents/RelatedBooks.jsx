const RelatedBooks = ({ book2 }) => {
    return (
        <div className="w-1/4 border-2 flex flex-col p-10 gap-8 max-h-[570px]">
            <div className="text-lg font-semibold">Related books</div>
            <div>
                {book2?.map((book) => {
                    return (
                        <div key={book.id} className="flex flex-row gap-5">
                            <img
                                src={book.image}
                                alt={book.image}
                                className="w-20 h-full"
                            />
                            <div className="flex flex-col pt-2 ">
                                <div className="font-semibold">
                                    {book.title}
                                </div>
                                <div className="text-sm opacity-60">
                                    by {book.author}
                                </div>
                                <div className="text-sm pt-2">Rating 3.8</div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div>
                {book2?.map((book) => {
                    return (
                        <div key={book.id} className="flex flex-row gap-5">
                            <img
                                src={book.image}
                                alt={book.image}
                                className="w-20 h-full"
                            />
                            <div className="flex flex-col pt-2 ">
                                <div className="font-semibold">
                                    {book.title}
                                </div>
                                <div className="text-sm opacity-60">
                                    by {book.author}
                                </div>
                                <div className="text-sm pt-2">Rating 3.8</div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div>
                {book2?.map((book) => {
                    return (
                        <div key={book.id} className="flex flex-row gap-5">
                            <img
                                src={book.image}
                                alt={book.image}
                                className="w-20 h-full"
                            />
                            <div className="flex flex-col pt-2 ">
                                <div className="font-semibold">
                                    {book.title}
                                </div>
                                <div className="text-sm opacity-60">
                                    by {book.author}
                                </div>
                                <div className="text-sm pt-2">Rating 3.8</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RelatedBooks;
