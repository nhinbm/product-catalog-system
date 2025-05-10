import HeroSection from "@/components/hero-section";

const SecondHero: React.FC = () => {
  return (
    <HeroSection
      header=" Our latest arrivals"
      desc="Create screens directly in Method or add your images from Sketch or
            Figma. You can even sync designs from your cloud storage!"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-6 gap-4 h-screen mt-8 md:mt-12">
        <div className="bg-black col-span-1 md:row-start-2 md:row-end-6 w-full h-32 md:h-full md:col-span-1" />
        <div className="bg-black col-span-1 md:row-start-1 md:row-end-5 w-full h-32 md:h-full md:col-span-1" />
        <div className="bg-black col-span-1 md:row-start-2 md:row-end-6 w-full h-32 md:h-full md:col-span-1" />
      </div>
    </HeroSection>
  );
};
export default SecondHero;
