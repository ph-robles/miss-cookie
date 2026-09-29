import Header from "../components/Header";
import Hero from "../components/Hero";
import HomeContent from "../components/HomeContent";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0908]">
      <Header />

      <Hero />

      <HomeContent />

      <Footer />
    </main>
  );
}
