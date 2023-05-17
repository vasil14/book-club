import { Link, Head } from '@inertiajs/react';
import Navbar from './Navbar/Navbar';



export default function Welcome({ auth }) {
    
    return (
        <>
            <Head title="Welcome" />
            <Navbar auth={auth}/>
            <div className='max-h-96 bg-gray-300 '>
                <div className='w-full h-96 max-w-screen-xl mx-auto px-10'>
                <div className='flex flex-row items-center justify-center' >
                    <div className='flex-1 ml-auto mr-0'>The Bookworm Editors'</div>
                    <div className='flex-1'>sd</div>
                </div>
                </div>
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
