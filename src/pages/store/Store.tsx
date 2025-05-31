// src/pages/StorePage.jsx
import PointsCard from '../../components/PointsCard';
import ProductCard from '../../components/ProductCard';

const products = [
  {
    id: 1,
    name: 'Badge Premium',
    description: 'Destaque seu perfil com uma badge especial',
    category: 'Badges',
    price: 500,
    icon: '⭐',
  },
  {
    id: 2,
    name: 'Theme Dark Pro',
    description: 'Tema escuro exclusivo para sua conta',
    category: 'Themes',
    price: 300,
    icon: '🖌️',
  },
];

export default function StorePage() {
  const points = 310;

  return (
    <div className="w-screen min-h-screen flex flex-col pb-20">
      <main className="flex-1 flex flex-col items-center mt-6 px-4">
        <h2 className="text-white text-2xl font-semibold mb-3">Loja de Pontos</h2>
        <PointsCard points={points} />
        <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-4">
          {products.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </main>
    </div>
  );
}
