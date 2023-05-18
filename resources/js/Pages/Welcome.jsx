import { Link, Head } from "@inertiajs/react";
import Navbar from "./Navbar/Navbar";
import Carousel from "./Carousel";
import CategorySection from "./CategorySection";

export default function Welcome({ auth, books }) {
    return (
        <>
            <Head title="Book Club" />
            <Navbar auth={auth} />
            <Carousel />
            <CategorySection />
            <div className="grid grid-cols-5 max-w-screen-2xl mx-auto">
            {books.map((book) => {
                return <div className="border flex flex-col py-5">
                        <img src={book.image} alt={book.image} className="h-40 mx-auto" />
                        <div className="px-5 py-3">
                            <div className="font-semibold">{book.title}</div>
                            <div className="font-light text-sm opacity-60">{book.author}</div>
                        </div>
                    </div>
                ;
            })}
            </div>
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
