import SiteLayout from "@/src/layouts/site";
import Hero from "./_components/hero";
import Features from "./_components/features";

const Home = () => {
  return (
    <SiteLayout>
      <Hero />
      <Features />
    </SiteLayout>
  );
};

export default Home;
