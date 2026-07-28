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
    <Link to={`/card/${id}`} className="group block w-full">
      <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-[#f0f0f0]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform transition-transform duration-[2000ms] ease-out group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
        />
      </div>
      
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[9px] tracking-[0.3em] uppercase text-brand-dark/50 mb-3 font-medium">
            {category}
          </p>
          <h3 className="font-serif text-lg text-brand-dark group-hover:text-brand-gold transition-colors duration-500 font-light">
            {title}
          </h3>
        </div>
        <p className="text-brand-dark/90 font-sans text-sm font-medium mt-4 tracking-widest">
          ₹{price}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
