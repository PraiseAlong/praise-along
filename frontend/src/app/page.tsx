import Navbar from './components/Navbar';
import FooterImage from './components/FooterImage';

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: 'linear-gradient(to bottom, rgb(255,255,255) 0%, rgb(225,222,215) 100%)'
      }}
    >
      <Navbar />
      <div className="w-full flex justify-center py-4">
        <img
          src="/images/FullStrap.png"
          alt="PraiseAlong Logo"
          className="hidden md:block max-w-7xl h-auto"
        />
        <img
          src="/images/CleanLogo.png"
          alt="PraiseAlong Logo"
          className="block md:hidden max-w-full h-auto px-8"
        />
      </div>
      <FooterImage />
    </div>
  );
}
