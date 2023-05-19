import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { booksPromo } from "../../assets/images";

// import required modules
import { Pagination } from "swiper";

const Carousel = () => {
    return (
        <div className="bg-[url('/resources/assets/images/bg.jpg')] h-[500px] mb-20">
            <Swiper
                pagination={true}
                loop={true}
                speed={1200}
                spaceBetween={200}
                modules={[Pagination]}
                className="mySwiper max-w-screen-xl"
            >
                <SwiperSlide className="flex">
                    <div className="h-full flex">
                        <div className="w-1/2 relative">
                            <div className="absolute top-1/2 -translate-y-1/2 flex flex-col gap-3 text-left">
                                <div className="uppercase text-neutral-500">
                                    The Bookworm Editors’
                                </div>
                                <div className="text-5xl">
                                    Featured Books of the
                                </div>
                                <div className="font-bold text-6xl">May</div>
                                <button className="px-5 py-2 mt-3    max-w-[150px] text-sm text-white font-semibold border-2 border-transparent hover:bg-transparent hover:border-teal-400 hover:text-teal-400 bg-teal-400 uppercase ease-in-out duration-200">
                                    See more
                                </button>
                            </div>
                        </div>
                        <div className="w-1/2 relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                                <img
                                    src={booksPromo}
                                    alt="booksPromo"
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex">
                    <div className="h-full flex">
                        <div className="w-1/2 relative">
                            <div className="absolute top-1/2 -translate-y-1/2 flex flex-col gap-3 text-left">
                                <div className="uppercase text-neutral-500">
                                    The Bookworm Editors’
                                </div>
                                <div className="text-5xl">
                                    Featured Books of the
                                </div>
                                <div className="font-bold text-6xl">May</div>
                                <button className="px-5 py-2 mt-3 max-w-[150px] text-sm text-white font-semibold border border-transparent hover:bg-white hover:border-teal-400 hover: bg-teal-400 uppercase">
                                    See more
                                </button>
                            </div>
                        </div>
                        <div className="w-1/2 relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                                <img
                                    src={booksPromo}
                                    alt="booksPromo"
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;
