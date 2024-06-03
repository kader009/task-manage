import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'John Doe',
      role: 'CEO, Company',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      testimony:
        'This task management tool has transformed the way we work. The intuitive interface and powerful features make managing projects a breeze.',
    },
    {
      name: 'Jane Smith',
      role: 'Project Manager',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      testimony:
        'I love how easy it is to keep track of tasks and deadlines. The collaboration features have improved our teams productivity immensely.',
    },
    {
      name: 'Michael Johnson',
      role: 'Freelancer',
      image: 'https://randomuser.me/api/portraits/men/46.jpg',
      testimony:
        'As a freelancer, this tool helps me stay organized and meet my clients deadlines. Highly recommend to anyone who needs to manage tasks efficiently.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Testimonials
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Hear what our users have to say about our task management tool.
          </p>
        </div>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {testimonial.testimony}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialsSection;
