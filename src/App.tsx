import { usePage } from '@/hooks/usePage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import Home from '@/pages/Home';
import Lineup from '@/pages/Lineup';
import Schedule from '@/pages/Schedule';
import Tickets from '@/pages/Tickets';
import Info from '@/pages/Info';

function App() {
  const [page, navigate] = usePage();

  return (
    <div className="min-h-screen bg-[#07060f] bg-noise">
      <ParticleBackground />
      <Navbar page={page} navigate={navigate} />
      <main className="relative z-10">
        {page === 'home' && <Home navigate={navigate} />}
        {page === 'lineup' && <Lineup navigate={navigate} />}
        {page === 'schedule' && <Schedule />}
        {page === 'tickets' && <Tickets />}
        {page === 'info' && <Info />}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}

export default App;
