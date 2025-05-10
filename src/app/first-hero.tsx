import HeroSection from "@/components/hero-section";
import Image from "next/image";

type PressLogoType = {
  src: string;
  alt: string;
};

const PRESS_LOGO: PressLogoType[] = [
  {
    src: "/the-new-work-times-logo.png",
    alt: "The New Work Times",
  },
  {
    src: "/vogue-logo.png",
    alt: "Vogue",
  },
  {
    src: "/vanity-fair-logo.png",
    alt: "Vanity Fair",
  },
  {
    src: "/cnbc-logo.png",
    alt: "CNBC",
  },
];

const FirstHero: React.FC = () => {
  return (
    <HeroSection
      header="Better clothing for the planet"
      desc="Create screens directly in Method or add your images from Sketch or
          Figma. You can even sync designs from your cloud storage!"
    >
      <div className="mt-8 md:mt-12">
        <div className="bg-gray-300 w-full aspect-[16/9] max-w-5xl mx-auto">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Sustainable clothing collection"
            width={1200}
            height={600}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      <div className="mt-16 md:mt-24">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 max-w-4xl mx-auto px-4">
          {PRESS_LOGO.map((logo, index) => (
            <div
              key={index}
              className="w-32 md:w-36 lg:w-40 opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={60}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </HeroSection>
  );
};
export default FirstHero;
