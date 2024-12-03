import { Link } from "react-router-dom";
import Card from "./Card";
import { useState } from "react";

const Header = ({ cartItems, totalItems }) => {
  const [openCart, isOpenCart] = useState(false);

  const setOpenCart = () => {
    isOpenCart(!openCart);
  };

  return (
    <header className="relative flex justify-end items-center bg-gray-800 shadow w-[100%] min-h-[70px] mx-auto">
      <Link
        to="/"
        className="text-white absolute left-10 font-semibold text-2xl"
      >
        <span className="shadow shadow-slate-50 text-white rounded-lg p-2">
          <b>
            <>Trendi</>
          </b>
        </span>
      </Link>
      <nav className="flex justify-center items-center w-[50%] h-[50px]">
        <ul className="flex justify-around items-center w-[50%] text-white font-medium">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </ul>
        <div className="flex items-center justify-center flex-col relative bg-white p-1 rounded-full hover:bg-gray-100">
          <div className="absolute right-[-4px] top-[-10px] bg-orange-500 rounded-full w-5 h-5 flex items-center justify-center font-raleway">{totalItems || 0}</div>
          <img
            onClick={(e) => setOpenCart(e.target)}
            className="right-10 w-[30px] h-[30px] cursor-pointer p-1"
            src="/icons/shopping-bag.png"
            alt="shopping-cart-icon"
          />
          <div
            className={`${
              openCart ? "flex" : "hidden"
            } font-medium items-center flex-col absolute bg-white shadow-lg bottom-[-310px] min-w-[200px] p-1 min-h-[300px] max-h-[300px] rounded-lg overflow-y-scroll gap-1`}
          >
            <p>Checkout</p>
            {cartItems
              ? cartItems.map((item) => (
                  <div key={item.id} className="flex flex-col shadow p-1 w-[100%] min-h-[300px]">
                    <div className="flex flex-col items-center justify-center min-w-[100px] min-h-[200px]">
                      <p>{item.title}</p>
                      <img className="w-[80px] h-[80px] object-contain" src={item.image} alt={item.title} />
                    </div>
                    <div className="flex justify-around">
                      <p>${item.price * item.quantity}</p>
                      <p>x{item.quantity}</p>
                    </div>
                  </div>
                )
            ) : null}
            <button className="mt-1 shadow-lg bg-gray-200 w-[80%] p-1 rounded-lg hover:bg-gray-300">Checkout</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
