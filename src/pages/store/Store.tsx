// src/pages/store/Store.tsx
import ProductCard from "../../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Apple Vision Pro",
    description:
      "O futuro da computação espacial com realidade aumentada imersiva.",
    category: "Tecnologia",
    price: 200000,
    imageUrl: "/images/applevision.png", // Substitua pelo URL real da imagem
  },
  {
    id: 2,
    name: "MacBook Pro M3 Max",
    description: "Desempenho extremo para tarefas profissionais e criativas.",
    category: "Computador",
    price: 180000,
    imageUrl: "/images/macbook.png",
  },
  {
    id: 3,
    name: "PlayStation 5 Edição Digital",
    description:
      "A nova geração de consoles com SSD ultrarrápido e gráficos incríveis.",
    category: "Games",
    price: 40000,
    imageUrl: "/images/play5.png",
  },
  {
    id: 4,
    name: "Curso Vitalício da Alura",
    description:
      "Acesso vitalício a toda a plataforma Alura com atualizações inclusas.",
    category: "Educação",
    price: 100000,
    imageUrl: "/images/alura.png",
  },
  {
    id: 5,
    name: "Cadeira Gamer Secretlab Titan Evo",
    description: "Ergonomia e conforto premium para longas horas de uso.",
    category: "Setup",
    price: 50000,
    imageUrl: "/images/cadeiragamer.png",
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
