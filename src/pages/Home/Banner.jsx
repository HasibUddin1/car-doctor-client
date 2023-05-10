import banner1 from '../../assets/images/banner/1.jpg'
import banner2 from '../../assets/images/banner/2.jpg'
import banner3 from '../../assets/images/banner/3.jpg'
import banner4 from '../../assets/images/banner/4.jpg'
import banner5 from '../../assets/images/banner/5.jpg'
import banner6 from '../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className='w-9/12 mx-auto'>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-[800px]">
                    <img src={banner1} className="w-full rounded-xl" />
                    <div className="absolute flex items-center ps-12 left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full rounded-xl">
                        <div className='text-white w-1/2 space-y-7'>
                            <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className='btn bg-orange-500 border-none mr-5'>Discover More</button>
                                <button className='btn btn-outline text-white hover:border-none'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide6" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[800px]">
                    <img src={banner2} className="w-full" />
                    <div className="absolute flex items-center ps-12 left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full rounded-xl">
                        <div className='text-white w-1/2 space-y-7'>
                            <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className='btn bg-orange-500 border-none mr-5'>Discover More</button>
                                <button className='btn btn-outline text-white hover:border-none'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[800px]">
                    <img src={banner3} className="w-full" />
                    <div className="absolute flex items-center ps-12 left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full rounded-xl">
                        <div className='text-white w-1/2 space-y-7'>
                            <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className='btn bg-orange-500 border-none mr-5'>Discover More</button>
                                <button className='btn btn-outline text-white hover:border-none'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-[800px]">
                    <img src={banner4} className="w-full" />
                    <div className="absolute flex items-center ps-12 left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full rounded-xl">
                        <div className='text-white w-1/2 space-y-7'>
                            <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className='btn bg-orange-500 border-none mr-5'>Discover More</button>
                                <button className='btn btn-outline text-white hover:border-none'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full h-[800px]">
                    <img src={banner5} className="w-full" />
                    <div className="absolute flex items-center ps-12 left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full rounded-xl">
                        <div className='text-white w-1/2 space-y-7'>
                            <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className='btn bg-orange-500 border-none mr-5'>Discover More</button>
                                <button className='btn btn-outline text-white hover:border-none'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full h-[800px]">
                    <img src={banner6} className="w-full" />
                    <div className="absolute flex items-center ps-12 left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full w-full rounded-xl">
                        <div className='text-white w-1/2 space-y-7'>
                            <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className='btn bg-orange-500 border-none mr-5'>Discover More</button>
                                <button className='btn btn-outline text-white hover:border-none'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;