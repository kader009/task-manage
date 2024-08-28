import FAQSection from '../FAQSection';
import FeaturesSection from '../FeaturesSection';
import HeroSection from '../HeroSection';
import HowItWorksSection from '../HowItWorkSection';
import PricingSection from '../PricingSection';
import TestimonialsSection from '../TestimonialSection';
import NewsletterSection from '../NewsletterSection';
import BlogSection from '../BlogSection';

const Home = () => {
  return (
    <div>
      <div>
        <HeroSection />
      </div>
      <div>
        <FeaturesSection />
      </div>
      <div>
        <HowItWorksSection />
      </div>
      <div>
        <TestimonialsSection />
      </div>
      <div>
        <PricingSection />
      </div>
      <div>
        <FAQSection />
      </div>
      <div>
        <BlogSection />
      </div>
      <div>
        <NewsletterSection />
      </div>
    </div>
  );
};

export default Home;
