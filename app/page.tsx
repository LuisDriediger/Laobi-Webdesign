import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Portfolio } from '@/components/sections/portfolio';
import { Services } from '@/components/sections/services';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </div>
  );
}