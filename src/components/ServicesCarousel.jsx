import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function ServicesCarousel() {
  const services = [
    { title: "1-on-1 Coaching", desc: "Personalized training and mentoring." },
    { title: "Group Workshops", desc: "Collaborative goal-setting sessions." },
    { title: "Nutrition Plans", desc: "Tailored meal planning and tracking." },
    { title: "Mindset Training", desc: "Build habits for lasting transformation." },
  ];

  const backgroundImages = [
    '/images/image2.png',
    '/images/image6.png',
    '/images/image1.png',
  ];

  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="services"
      className="relative h-screen text-white flex flex-col items-center justify-center overflow-hidden"
    >
      {backgroundImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Background ${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentBgIndex ? 'opacity-60' : 'opacity-0'
          }`}
        />
      ))}
      <div className="relative z-10 max-w-xl w-full px-4">
        <h3 className="text-2xl text-center font-semibold mb-6">Our Services</h3>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
        >
          {services.map((service, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white bg-opacity-90 p-6 shadow-lg rounded-xl text-center text-gray-900">
                <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                <p>{service.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

