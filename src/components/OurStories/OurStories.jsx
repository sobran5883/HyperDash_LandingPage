import React from 'react';
import Slider from 'react-slick';
import Testimonial from './Testimonial';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import story1 from '../../assets/Story 1 Img.png';
import story2 from '../../assets/Story 2 Img.png';
import story3 from '../../assets/Story 3 Img.png';
import left from '../../assets/left-arrow.png';
import right from '../../assets/right-arrow.png';

function OurStories() {
  const slider2 = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className='bg-[#1A1A1A] pb-10'>
      <div className='container py-6'>
        <div className='flex justify-between items-center pt-10 md:pt-20 pb-10'>
            <div>
                <h1 className='text-[#FFFFFA] text-xl md:text-3xl'>Our Stories</h1>
            </div>
            <div className='flex gap-8'>
              <button onClick={() => slider2?.current?.slickPrev()}>
                <img className='h-3 md:h-4' src={right} alt="Previous" />
              </button>
              <button onClick={() => slider2?.current?.slickNext()}>
                <img className='h-3 md:h-4' src={left} alt="Next" />
              </button>
            </div>
        </div>

        <div className=''>
          <Slider ref={slider2} {...settings}>
            <Testimonial
              title="Lorem Ipsum"
              image={story1}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Testimonial
              title="Lorem Ipsum"
              image={story2}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Testimonial
              title="Lorem Ipsum"
              image={story3}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Testimonial
              title="Lorem Ipsum"
              image={story2}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default OurStories;
