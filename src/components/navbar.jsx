import React from "react";
import bag from "../media/icons/bag.svg";
function Navbar() {
  return (
    <nav>
      <div className="nav-center">
        <h3>HotDeals</h3>
        <div className="nav-container">
          <img className="nav-bag" src={bag} alt="logo_bag" />
          <div className="amount-container">
              <p className="total-amount">
                  5
              </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
