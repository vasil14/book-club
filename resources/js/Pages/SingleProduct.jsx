import { Head, Link } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import { useState } from "react";
import { Breadcrumbs, Rating, Typography } from "@mui/material";

const SingleProduct = ({ book, auth, book2 }) => {
    console.log(book2);
    const [show, setShow] = useState(false);

    const toggler = () => {
        setShow((previousState) => !previousState);
    };

    return (
        <>
            <Head title={book[0]?.title} />
            <MainLayout auth={auth}>
                <div className="border-b py-5">
                    <div className="max-w-screen-2xl mx-auto px-10">
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="inherit" href="/">
                                Home
                            </Link>
                            {/* <Link
                                underline="hover"
                                color="inherit"
                                href="/material-ui/getting-started/installation/"
                            >
                                {book[0]?.category}
                            </Link> */}
                            <Typography color="text.primary">
                                {book[0].title}
                            </Typography>
                        </Breadcrumbs>
                    </div>
                </div>
                <div className="max-w-screen-2xl px-10 w-full mx-auto mt-16 flex gap-5">
                    <div className=" w-3/4">
                        <div className="flex flex-row border-b-2 pb-14 mr-5">
                            <div className="w-1/3 mx-10 mxaut">
                                <img
                                    src={book[0]?.image}
                                    alt={book[0]?.image}
                                    className="w-52 mx-auto"
                                />
                            </div>
                            <div className="w-2/3 px-10 ">
                                <div className="flex flex-col gap-5 px-5">
                                    <div className="w-full text-4xl ">
                                        {book[0].title}
                                    </div>
                                    <div>By author : {book[0]?.author}</div>
                                    <div className="flex flex-col gap-2 overflow-hidden pr-14">
                                        <div>Desription</div>
                                        <div className="">
                                            {show
                                                ? book[0]?.description
                                                : book[0]?.description.substring(
                                                      0,
                                                      160
                                                  ) + "..."}
                                        </div>
                                            <span
                                                onClick={toggler}
                                                className="cursor-pointer text-teal-400 text-sm font-semibold"
                                            >
                                                {show ? "[-] Sow less" : "[+] Show more"}
                                            </span>
                                        <div className="flex">
                                            <Rating readOnly={false} value={book.rating} precision={1}/> 
                                            <div>3.8</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/4 border-2 flex flex-col p-10 gap-5">
                            <div className="text-lg font-semibold">Related books</div>
                            <div>{book2?.map(book =>{
                                return <div key={book.id} className="flex flex-row gap-5">
                                    <img src={book.image} alt={book.image} className="w-20 h-full"/>
                                    <div className="flex flex-col pt-2 ">
                                        <div className="font-semibold">{book.title}</div>
                                        <div className="text-sm opacity-60">by {book.author}</div>
                                        <div className="text-sm pt-2">Rating 3.8</div>
                                    </div>
                                </div>
                            })}</div>
                            <div>{book2?.map(book =>{
                                return <div key={book.id} className="flex flex-row gap-5">
                                    <img src={book.image} alt={book.image} className="w-20 h-full"/>
                                    <div className="flex flex-col pt-2 ">
                                        <div className="font-semibold">{book.title}</div>
                                        <div className="text-sm opacity-60">by {book.author}</div>
                                        <div className="text-sm pt-2">Rating 3.8</div>
                                    </div>
                                </div>
                            })}</div>
                            <div>{book2?.map(book =>{
                                return <div key={book.id} className="flex flex-row gap-5">
                                    <img src={book.image} alt={book.image} className="w-20 h-full"/>
                                    <div className="flex flex-col pt-2 ">
                                        <div className="font-semibold">{book.title}</div>
                                        <div className="text-sm opacity-60">by {book.author}</div>
                                        <div className="text-sm pt-2">Rating 3.8</div>
                                    </div>
                                </div>
                            })}</div>
                        </div>
                </div>
            </MainLayout>
        </>
    );
};

export default SingleProduct;
