interface Product {
  icon: React.ReactNode;
  name: string;
  description: string;
  category: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex items-center bg-[#232e48] rounded-2xl p-4 shadow w-full">
      <div className="flex-shrink-0 bg-[#1b243a] p-3 rounded-xl mr-4">
        <span className="text-3xl">{product.icon}</span>
      </div>
      <div className="flex-1">
        <h3 className="text-white font-bold text-lg">{product.name}</h3>
        <p className="text-gray-300 text-sm">{product.description}</p>
        <span className="bg-[#222347] text-blue-400 text-xs px-2 py-1 rounded mt-1 inline-block">{product.category}</span>
      </div>
      <div className="flex flex-col items-end ml-4">
        <span className="text-yellow-400 font-bold text-lg mb-2">🪙 {product.price}</span>
        <button className="bg-[#384362] text-white px-5 py-2 rounded-lg font-bold active:scale-95 transition">Comprar</button>
      </div>
    </div>
  );
}
