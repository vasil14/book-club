import { Head, Link } from "@inertiajs/react";
import MainLayout from "@/Layouts/MainLayout";
import React from "react";
import { Breadcrumbs, Typography } from "@mui/material";

const SingleProduct = ({ book, auth }) => {
    console.log(book[0]);
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
                <div className="max-w-screen-2xl px-10 mx-auto mt-16">
                    <div className="max-w-screen-lg flex flex-row ">
                    <div className="w-1/3 mx-10">
                        <img src={book[0]?.image} alt={book[0]?.image} className="w-full"/>
                    </div>
                    <div className="w-2/3 pl-10 flex flex-col gap-5">
                        <div className="w-full text-4xl ">{book[0].title}</div>
                        <div>
                            By author : {book[0]?.author}
                        </div>
                        <div className="flex flex-col gap-2">
                            <div>Desription</div>
                            <div>{book[0]?.description}</div>
                        </div>
                    </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
};

export default SingleProduct;
