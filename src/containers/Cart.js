import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const cartProducts = cart ? Object.values(cart) : [];

  return (
    <div className="ui grid container">
      <h2>Cart</h2>
      <div className="ui divided products">
        {cartProducts.length ? (
          cartProducts.map((product) => (
            <div className="product" key={product.id}>
              <div className="content">
                <div className="header">{product.title}</div>
                <div className="meta">{product.price}</div>
              </div>
            </div>
          ))
        ) : (
          <div className="product">Your cart is empty</div>
        )}
      </div>
    </div>
  );
};

export default Cart;