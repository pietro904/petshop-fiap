import Card from '../components/Card';

const products = [
  {
    title: "Ração Premium Golden 15kg",
    description: "Ração completa e balanceada para cães adultos de todas as raças. Rica em proteínas.",
    price: "189,90",
    image: "🦴",
    category: "Alimentação"
  },
  {
    title: "Ração Gato Whiskas 10kg",
    description: "Alimento completo para gatos adultos. Sabor peixe e carne.",
    price: "129,90",
    image: "🐟",
    category: "Alimentação"
  },
  {
    title: "Brinquedo Mordedor",
    description: "Mordedor resistente de borracha natural. Ideal para cães que adoram mastigar.",
    price: "39,90",
    image: "🦴",
    category: "Brinquedos"
  },
  {
    title: "Bola Interativa",
    description: "Bola que faz barulho e estimula o instinto de caça do seu pet.",
    price: "24,90",
    image: "🎾",
    category: "Brinquedos"
  },
  {
    title: "Shampoo Neutro 500ml",
    description: "Shampoo suave para banho, com fragrância suave e fórmula hipoalergênica.",
    price: "42,50",
    image: "🧴",
    category: "Higiene"
  },
  {
    title: "Coleira Ajustável",
    description: "Coleira de nylon resistente e confortável, com fecho de segurança.",
    price: "35,00",
    image: "🎀",
    category: "Acessórios"
  },
  {
    title: "Cama Ortopédica",
    description: "Cama macia e confortável para o descanso do seu pet. Lavável.",
    price: "159,90",
    image: "🛏️",
    category: "Acessórios"
  },
  {
    title: "Areia Higiênica 10kg",
    description: "Areia absorvente para gatos com controle de odor. Alta qualidade.",
    price: "49,90",
    image: "🐱",
    category: "Higiene"
  }
];

export default function Produtos() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Nossos Produtos</h1>
        <p className="text-gray-600">Escolha o melhor para o seu pet</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Card key={index} {...product} />
        ))}
      </div>
    </div>
  );
}
