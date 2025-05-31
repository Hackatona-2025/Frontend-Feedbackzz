
// src/pages/store/Store.tsx
import ProductCard from "../../components/ProductCard";
import { Gift } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Mochila da HPE",
    description: "Uma mochila exclusiva da HPE - para você levar seus itens",
    category: "Badges",
    price: 20000,
    icon: <Gift className="w-8 h-8 text-yellow-400" />,
  },
  {
    id: 2,
    name: "PowerBank",
    description: "Um powerbank, para você nunca ficar sem bateria",
    category: "Tecnology",
    price: 3000,
    icon: <Gift className="w-8 h-8 text-pink-400" />,
  },
  {
    id: 3,
    name: "Aulas de Graça na Alura",
    description: "Mais de 1000 cursos gratuitos e interativos na Alura",
    category: "Education",
    price: 30000,
    icon: <Gift className="w-8 h-8 text-pink-400" />,
  },
  
];

export default function StorePage() {
  return (
    <div className="w-screen overflow-y-auto flex flex-col bg-background">
      <main className="flex-1 flex flex-col items-center mt-6 px-4">
        <h2 className="text-foreground text-2xl font-semibold mb-3">
          Loja de Pontos
        </h2>
        <div className="w-full space-y-4">
          {products.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </main>
    </div>
  );
}
