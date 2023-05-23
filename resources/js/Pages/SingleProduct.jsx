import { Head } from "@inertiajs/react";
import { Breadcrumb } from "antd";
import MainLayout from "@/Layouts/MainLayout";
import SingleBook from "@/Components/SinglePageComponents/SingleBook";
import RelatedBooks from "@/Components/SinglePageComponents/RelatedBooks";

const SingleProduct = ({ book, auth, book2 }) => {
    return (
        <>
            <Head title={book[0]?.title} />
            <MainLayout auth={auth}>
                <div className="border-b py-5">
                    <div className="max-w-screen-2xl mx-auto px-10">
                        <Breadcrumb
                            items={[
                                {
                                    title: <a href="/">Home</a>,
                                },
                                {
                                    title: <a className="text-black" href="">Book Category</a>,
                                },
                                {
                                    title: book[0]?.title,
                                },
                            ]}
                        />
                    </div>
                </div>
                <div className="max-w-screen-2xl px-10 w-full mx-auto mt-16 flex gap-5">
                    <SingleBook book={book} />
                    <RelatedBooks book2={book2} />
                </div>
            </MainLayout>
        </>
    );
};

export default SingleProduct;
