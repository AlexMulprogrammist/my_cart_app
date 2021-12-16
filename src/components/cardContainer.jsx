import React from "react";
import { useGlobalContext } from "../context";
import CartItem from "./cartItem";

function CardContainer() {
  const { cart, amount } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>Your wishlist</h2>
          <h4 className="empty-card">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your wishlist</h2>
      </header>
      {/* cart */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>$ {amount}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => console.log("clear cart")}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
}

export default CardContainer;
