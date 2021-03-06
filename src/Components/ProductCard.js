import './ProductCard.css';
import formatCurrency from 'format-currency';
import Rating from './Rating';
import { useContext } from 'react';
import CartContext from '../context/cart/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  let options = { format: '%s%v', symbol: '$' };
  return (
    <div className="productCard__wrapper">
      <div>
        <img className="productCard__img" src={product.image} alt="" />
        <h4>{product.name}</h4>
        <div className="ProductCard__price">
          <h5>{formatCurrency(`${product.price}`, options)}</h5>
        </div>
        <div className="ProductCard__Rating">
          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        </div>
        <button className="ProductCard__button" onClick={() => addToCart(product)}>
          Add to cart
        </button>
      </div>      
    </div>
  );
}

export default ProductCard;
;