import { Head, Link } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import { useState } from "react";
import { Breadcrumbs, Typography } from "@mui/material";

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
                <div className="max-w-screen-2xl px-10 w-full mx-auto mt-16 flex">
                    <div className="flex flex-row w-full border-b pb-14">
                        <div className="w-1/5 mx-10">
                            <img
                                src={book[0]?.image}
                                alt={book[0]?.image}
                                className="w-full"
                            />
                        </div>
                        <div className="w-3/5 px-10 ">
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
                                                  320
                                              ) + "..."}
                                    </div>
                                        <span
                                            onClick={toggler}
                                            className="cursor-pointer text-teal-400 text-sm font-semibold"
                                        >
                                            {show ? "[-] Sow less" : "[+] Show more"}
                                        </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/5 border flex flex-col p-8 gap-5">
                            <div className="text-lg font-semibold">Related books</div>
                            <div>{book2?.map(book =>{
                                return <div key={book.id} className="flex flex-row gap-2">
                                    <img src={book.image} alt={book.image} className="w-16"/>
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
