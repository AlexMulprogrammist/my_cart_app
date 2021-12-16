import React from "react";
import { useGlobalContext } from "../context";

function CardContainer() {
  const { cart } = useGlobalContext();
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
          
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>$ 0.00</span>
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
