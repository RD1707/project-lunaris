import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-white">
          Lunaris
        </Link>
        <div className="space-x-8 text-lg">
          <Link href="/missions" className="text-gray-300 hover:text-white transition-colors">
            Missions
          </Link>
          <Link href="/fleet" className="text-gray-300 hover:text-white transition-colors">
            Fleet
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
