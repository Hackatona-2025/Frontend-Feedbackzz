import { DisplayCoins } from "./DisplayCoins";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    <Card className="flex gap-3 items-center justify-center p-4 hover:bg-accent/50 transition-colors duration-200 group">
      <div className="w-16 h-16 bg-primary rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
        <span className="text-3xl text-primary-foreground ">{product.icon}</span>
      </div>
      <div className="flex-1">
        <h3 className="text-foreground font-bold text-lg">{product.name}</h3>
        <p className="text-muted-foreground text-sm">{product.description}</p>
        <span className="text-secondary-foreground bg-gray-100 text-xs px-2 py-1 rounded mt-1 inline-block">{product.category}</span>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row items-center justify-center ml-4">
        <span className="flex items-center justify-center text-yellow-400 font-bold text-lg gap-1">
          <DisplayCoins coins={product.price} />
        </span>
        <Button className="active:scale-95 transition bg-gradient-to-br from-blue-500 to-purple-600">Comprar</Button>
      </div>
    </Card>
  );
}
