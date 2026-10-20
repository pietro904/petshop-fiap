export default function Card({ title, description, price, image, category }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center">
        <span className="text-6xl">{image || '🐶'}</span>
      </div>
      <div className="p-5">
        {category && (
          <span className="text-xs font-semibold text-orange-500 uppercase tracking-wide">{category}</span>
        )}
        <h3 className="text-xl font-bold mt-1 mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-orange-500">R$ {price}</span>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
