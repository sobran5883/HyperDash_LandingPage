import video from '../../assets/Features 2.1 video.png'

function AirX() {
  return (
    <div>
        <div>
            <div className="w-full bg-[#1A1A1A] py-10 px-10 lg:py-20 lg:px-32 xl:py-40 xl:px-60">
                <div className="relative">
                    <div className="absolute z-10 text-white -top-3 left-6 md:left-12 md:-top-5 lg:-top-8 lg:left-20">
                        <h2 className="md:text-3xl lg:text-4xl xl:text-6xl">Air X</h2>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={video} alt="video" className="w-full" />
                    </div>
                </div>
                <div>
                    <h1 className='text-[#FFFFFB] text-xl md:text-2xl lg:text-4xl lg:mt-4'>Accelerate into a New Era</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AirX