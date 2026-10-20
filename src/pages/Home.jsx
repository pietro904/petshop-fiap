import Card from '../components/Card';

const featured = [
  {
    title: "Ração Premium Golden",
    description: "Ração completa e balanceada para cães adultos de todas as raças.",
    price: "89,90",
    image: "🦴",
    category: "Alimentação"
  },
  {
    title: "Brinquedo Interativo",
    description: "Brinquedo resistente para gatos e cães se divertirem por horas.",
    price: "45,00",
    image: "🎾",
    category: "Brinquedos"
  },
  {
    title: "Shampoo Neutro",
    description: "Shampoo suave para banho, com fragrância suave e fórmula hipoalergênica.",
    price: "32,50",
    image: "🧴",
    category: "Higiene"
  }
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-500 to-yellow-400 rounded-2xl text-white p-10 md:p-16 mb-12 text-center shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Bem-vindo ao PetShop FIAP!</h1>
        <p className="text-xl md:text-2xl mb-6 opacity-90">Tudo o que seu pet precisa para ser feliz e saudável.</p>
        <a
          href="/produtos"
          className="inline-block bg-white text-orange-500 font-bold px-8 py-3 rounded-full hover:bg-orange-50 transition shadow-lg"
        >
          Ver Produtos
        </a>
      </section>

      {/* About */}
      <section className="mb-12 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Sobre Nós</h2>
        <p className="text-gray-600 leading-relaxed">
          Somos o PetShop oficial da FIAP. Oferecemos produtos de qualidade, atendimento especializado
          e muito amor pelos animais. Aqui seu pet encontra ração, brinquedos, acessórios e cuidados.
        </p>
      </section>

      {/* Featured Products */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Destaques</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}
