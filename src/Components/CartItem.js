import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import formatCurrency from 'format-currency';


const CartItem = ({item}) => {
  const { removeItem } = useContext(CartContext);
  let options = {format: '%s%v', symbol: '$' };

  return (
    <li className="CartItem__item">
      <img src={item.image} alt="" />
      <div>
        {item.name} {formatCurrency(`${item.price}`, options)}
      </div>
      <buttom className="CartItem__button" onClick={() => removeItem(item._id)}>Remove</buttom>
    </li>
  );
}

export default CartItem;
