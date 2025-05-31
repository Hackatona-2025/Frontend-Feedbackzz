import ProductCard from '../../components/ProductCard';
import { Gift } from 'lucide-react';


const products = [
  {
    id: 1,
    name: 'Badge Premium',
    description: 'Destaque seu perfil com uma badge especial',
    category: 'Badges',
    price: 2,
    icon: <Gift className="w-8 h-8 text-yellow-400" />,
  },
  {
    id: 2,
    name: 'Theme Dark Pro',
    description: 'Tema escuro exclusivo para sua conta',
    category: 'Themes',
    price: 300,
    icon: <Gift className="w-8 h-8 text-pink-400" />,
  },
];

export default function StorePage() {

  return (
    <div className="w-screen min-h-screen flex flex-col pb-20">
      <main className="flex-1 flex flex-col items-center mt-6 px-4">
        <h2 className="text-white text-2xl font-semibold mb-3">Loja de Pontos</h2>
        <div className="w-full space-y-4">
      {products.map((prod) => (
      <ProductCard key={prod.id} product={prod} />
    ))}
        </div>
      </main>
    </div>
  );
}
