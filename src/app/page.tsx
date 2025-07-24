import Hero from '@/components/Hero';
import FocusAreas from '@/components/FocusAreas';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
import HackUNCPOpening from '@/components/HackUNCPOpening';
import HackUNCP2026 from '@/components/HackUNCP2026';
import HackUNCP2025 from '@/components/HackUNCP2025';
import HackUNCPClosing from '@/components/HackUNCPClosing';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Hero />
      <FocusAreas />
      <HackUNCPOpening />    {/* Opens the HackUNCP story */}
      <HackUNCP2026 />       {/* 2026 event details */}
      <HackUNCP2025 />       {/* 2025 recap */}
      <HackUNCPClosing />    {/* Closes the HackUNCP story */}
      <Team />
      <Footer />
    </div>
  );
}