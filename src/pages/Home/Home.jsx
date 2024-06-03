import FAQSection from "../FAQSection";
import FeaturesSection from "../FeaturesSection";
import HeroSection from "../HeroSection";
import HowItWorksSection from "../HowItWorkSection";
import PricingSection from "../PricingSection";
import TestimonialsSection from "../TestimonialSection";

const Home = () => {
  return <div>
    <div>
      <HeroSection/>
    </div>
    <div>
      <FeaturesSection/>
    </div>
    <div>
      <HowItWorksSection/>
    </div>
    <div>
      <TestimonialsSection/>
    </div>
    <div>
      <PricingSection/>
    </div>
    <div>
      <FAQSection/>
    </div>
  </div>;
};

export default Home;
