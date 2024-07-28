import { Inter } from "next/font/google";
import {
  MetaHead,
  Navigation,
  Hero,
  Capability,
  Information,
  LatestWork,
  Footer,
} from "./_components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <MetaHead />

      <main className="container">
        <Navigation />
        <Hero />
        <Capability />
        <Information />
        <LatestWork />
        <Footer />
      </main>
    </>
  );
}
