import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-orange-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <span className="text-3xl">🐾</span> PetShop FIAP
        </Link>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-orange-200 font-medium transition">Home</Link>
          <Link to="/produtos" className="hover:text-orange-200 font-medium transition">Produtos</Link>
        </div>
      </div>
    </nav>
  );
}
