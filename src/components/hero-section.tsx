import Link from "next/link";
import { ReactNode } from "react";

interface HeroSectionProps {
  header: string;
  desc: string;
  children: ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  header,
  desc,
  children,
}) => {
  return (
    <section className="py-10 md:py-24 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
          {header}
        </h1>

        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mb-6 md:mb-8 px-4">
          {desc}
        </p>

        <Link
          href="/shop"
          className="inline-block border border-black px-6 md:px-8 py-2 md:py-3 text-sm md:text-base hover:bg-black hover:text-white transition-colors"
        >
          Shop All
        </Link>

        {children}
      </div>
    </section>
  );
};
export default HeroSection;
