import { Gift } from "lucide-react";
import { DisplayCoins } from "./DisplayCoins";


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
    <div className="flex gap-3 items-center bg-gray-50 rounded-2xl p-4 shadow-lg hover:bg-gray-100 transition-colors duration-200 group">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
        <span className="text-3xl">{product.icon}</span>
      </div>
      <div className="flex-1">
        <h3 className="text-black font-bold text-lg">{product.name}</h3>
        <p className="text-gray-500 text-sm">{product.description}</p>
        <span className="bg-[#222347] text-blue-400 text-xs px-2 py-1 rounded mt-1 inline-block">{product.category}</span>
      </div>
      <div className="flex flex-col items-end ml-4">
        <span className="flex items-center text-yellow-400 font-bold text-lg mb-2 gap-1">
          <DisplayCoins coins={product.price} />
        </span>
        <button className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-white px-5 py-2 rounded-lg font-bold active:scale-95 transition">Comprar</button>
      </div>
    </div>
  );
}
