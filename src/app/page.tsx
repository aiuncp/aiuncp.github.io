import Hero from '@/components/Hero';
import FocusAreas from '@/components/FocusAreas';
import HackUNCP from '@/components/HackUNCP';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Hero />
      <FocusAreas />
      <HackUNCP />
      <Team />
      <Footer />
    </div>
  );
}
