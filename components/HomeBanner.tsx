import Title from './Title'

const HomeBanner = () => {
    return (
        <section className='w-full h-screen bg-[#b49f89] relative overflow-hidden'>
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <img src="/images/banner-bg.jpg" alt="coffee" className='w-full h-full object-cover opacity-70 ' />
            </div>


            {/* Content */}
            <div className='relative z-10 h-full flex items-center'>
                <div className='flex flex-col md:flex-row max-w-7xl mx-auto px-6 items-center justify-end w-full'>


                    {/* Right Side Text Box */}
                    <div className=' w-full md:max-w-md bg-[#FDEDDC] p-10 rounded-lg shadow-lg max-w-md md:ml-auto'>
                        <p className='text-sm font-semibold text-gray-600 uppercase tracking-wider'>
                            New Arrival
                        </p>
                        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#A8741A] mt-2 leading-tight'>
                            Discover Our <br />
                            New Collection
                        </h1>
                        <p className='text-gray-700 mt-4 leading-relaxed'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                        </p>
                        <button className="mt-6 bg-[#A8741A] text-white py-2 px-6 rounded hover:bg-[#8d6113] transition">
                            BUY NOW
                        </button>
                    </div>

                </div>
            </div>







        </section >
    )
}

export default HomeBanner