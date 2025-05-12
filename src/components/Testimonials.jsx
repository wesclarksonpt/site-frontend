import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonialsData = [
  {
    name: 'John D.',
    feedback: 'Best trainer ever! He forced me to workout, and stopped me from eating junk food -- it was terrible! But great for my health!',
    image: "/images/image4.png",
  },
  {
    name: 'Sarah M.',
    feedback: "My kids complain about going to training, but they always give me a hug and tell me they love me afterwards. Wes is great with kids!",
    image: "/images/image3.png",
  },
  {
    name: 'Ali R.',
    feedback: "The good thing is, Wes will come to you. The bad thing is, now you can't escape because he knows where you live...     but I guess that's the point",
    image: "/images/image5.png",
  },
];

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonials" className="py-12 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
      <Slider {...settings} className="max-w-xl mx-auto">
        {testimonialsData.map((t, index) => (
          <div key={index} className="p-6 bg-white shadow-xl rounded-2xl">
            <img
              src={t.image}
              alt={t.name}
              className="w-108 h-108 object-cover rounded-full mx-auto mb-4 border-4 border-blue-500"
            />
            <p className="text-lg italic mb-4">“{t.feedback}”</p>
            <p className="font-semibold">– {t.name}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
