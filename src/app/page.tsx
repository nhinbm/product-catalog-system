import FirstHero from "./first-hero";
import SecondHero from "./second-hero";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen pt-16 md:pt-20">
      <FirstHero />
      <SecondHero />
    </main>
  );
};
export default Home;
