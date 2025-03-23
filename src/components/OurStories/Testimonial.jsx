

const Testimonial = ({image, title, content}) => {
  return (
    <div className='w-full px-1 md:px-2'>
        <div className='flex flex-col items-center '>
          <img
            className=''
            src={image}
            alt={Image}
          />
          <div className='w-full flex flex-col gap-4'>
            <h1 className='text-[#FFFFFA] font-normal text-lg md:text-xl'>{title}</h1>
            <h2 className='text-xs md:text-base font-light text-[#FFFFFA]'>{content}</h2>
          </div>
        </div>
    </div>
  );
};

export default Testimonial;
