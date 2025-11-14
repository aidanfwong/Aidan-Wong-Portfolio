import HeroSection from "./HeroSection";
import About from "./About";

const HomePage = () => (
  <div className="flex flex-col gap-20">
    <HeroSection />
    <About />
  </div>
);

export default HomePage;
