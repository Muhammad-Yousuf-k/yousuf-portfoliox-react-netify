import { Suspense, lazy } from "react";
import Navbar from "./component/Navbar";
import SkeletonScreen from './component/SkeletonScreen';
// Lazy load all sections
const HeroSection = lazy(() => import("./sections/HeroSection"));
const AboutSection = lazy(() => import("./sections/AboutSection"));
const ExperienceSection = lazy(() => import("./sections/ExperienceSection"));
const ServiceSection = lazy(() => import("./sections/ServiceSection"));
const ShowCaseSection = lazy(() => import("./sections/ShowCaseSection"));
const TestimonialSection = lazy(() => import("./sections/TestimonialSection"));
const ContactSection = lazy(() => import("./sections/ContactSection"));
const FooterSection = lazy(() => import("./sections/FooterSection"));

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<SkeletonScreen />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<SkeletonScreen />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<SkeletonScreen />}>
        <ExperienceSection />
      </Suspense>
      <Suspense fallback={<SkeletonScreen />}>
        <ServiceSection />
      </Suspense>
      <Suspense fallback={<SkeletonScreen />}>
        <ShowCaseSection />
      </Suspense>
      <Suspense fallback={<SkeletonScreen />}>
        <TestimonialSection />
      </Suspense>
      <Suspense fallback={<SkeletonScreen />}>
        <ContactSection />
      </Suspense>
      <Suspense fallback={<SkeletonScreen />}>
        <FooterSection />
      </Suspense>
    </>
  );
};

export default App;