import { Head, Link } from "@inertiajs/react";
import Carousel from "../Components/Carousel";
import CategorySection from "../Components/CategorySection";
import MainLayout from "@/Layouts/MainLayout";

export default function Welcome({ books, auth }) {
    console.log(auth);
    return (
        <>
            <Head title="Book Club" />
            <MainLayout auth={auth}>
                <Carousel />
                <CategorySection />
                <div className="grid grid-cols-5 max-w-screen-xl mx-auto">
                    {books?.data?.map((book) => {
                        return (
                            <Link key={book.id} href={"/book/" + book.id}>
                                <div className="border flex flex-col p-8">
                                    <img
                                        src={book.image}
                                        alt={book.image}
                                        className="h-52 mx-auto"
                                    />
                                    <div className="pt-8 flex flex-col gap-1">
                                        <div className="font-semibold">
                                            {book.title}
                                        </div>
                                        <div className="font-light text-sm opacity-60">
                                            by {book.author}
                                        </div>
                                        <div className="font-light text-sm opacity-60">
                                            pages {book.pages}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </MainLayout>
        </>

        // <>
        //    <Head title='Book Club'></Head>
        //     <nav className='max-w-screen-2xl mx-auto h-20 items-center'>
        //         <div className='w-full flex flex-row gap-10 items-center py-5'>
        //             <img src={logo} alt="book-club-logo" className='h-12'/>
        //             {navLinks?.map(item =><div key={item.id} className='text-black text-lg font-sans font-semibold pt-3'>{item.title}</div>)}
        //         </div>
        //     </nav>

        // </>
    );
}
