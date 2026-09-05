import Contact from "@/components/sections/Contact";
import FullSelfDriving from "@/components/sections/FullSelfDriving";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FullSelfDriving />
        <Contact />
      </main>
    </>
  );
}
