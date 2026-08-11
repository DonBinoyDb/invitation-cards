import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, title, price, image, category }: ProductCardProps) => {
  return (
    <div className="group block w-full relative">
      <Link to={`/card/${id}`} className="block relative overflow-hidden rounded-md bg-[#F4F4F5] aspect-[4/5] mb-4">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover p-6 transform transition-transform duration-500 group-hover:scale-105"
        />
        
      </Link>
      
      <div className="text-left">
        <p className="text-[10px] tracking-wider uppercase text-gray-500 mb-1 font-semibold">
          {category}
        </p>
        <Link to={`/card/${id}`}>
          <h3 className="font-sans font-bold text-[15px] text-brand-dark hover:text-black mb-1 truncate">
            {title}
          </h3>
        </Link>
        <p className="text-brand-dark font-medium text-[14px]">
          ₹{price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
