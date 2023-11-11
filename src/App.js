import React, { useState } from "react";
import Product from "./components/Product";
import SearchBar from "./components/SearchBar";
import productsData from "./data";
import "./App.css";

function App() {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleSearchBar = () => {
    setSearchOpen(!searchOpen);
  };

  const addToCart = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    setCart([...cart, productToAdd]);
  };
  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };
  const filterProducts = (searchTerm) => {
    const filteredProducts = productsData.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  return (
    <div className="App">
      <div className="md:container mx-auto">
        <div className=" w-11/12 lg:w-2/3 md:w-4/5 sm:w-10/12 mx-auto ">
          <div className="header">
            <div className="flex items-center justify-between pt-8 pb-8">
              <h1 className="text-2xl font-semibold text-left">
                <a href="/react-products-app/"> MY JEWELRY STORE</a>
              </h1>
              <div className="flex space-x-5">
                <img
                  className="w-7 h-7 cursor-pointer"
                  src="imgs/search.png"
                  alt="Icon 2"
                  onClick={toggleSearchBar}
                />
                {searchOpen && <SearchBar searchProducts={filterProducts} />}
                <div className="relative cursor-pointer" onClick={toggleCart}>
                  <img className="w-7 h-7" src="imgs/cart.png" alt="Icon 2" />
                  {cart.length > 0 && (
                    <div className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full text-xs">
                      {cart.length}
                    </div>
                  )}{" "}
                </div>
                <div className={`cart ${cartOpen ? "block" : "hidden"}`}>
                  <div className="cart fixed inset-0 flex items-center  z-50">
                    <div className="fixed inset-0 bg-black opacity-50   "></div>
                    <div className=" lg:w-3/4 w-1/2 h-full bg-white shadow-lg transform translate-x-full">
                      <div className=" flex   p-4">
                        <button onClick={toggleCart}>X</button>
                      </div>
                      <div className="  flex     p-8">
                        <ul>
                          {cart.map((item) => (
                            <li key={item.id} className=" ">
                              <div className="     p-2 ">
                                <img
                                  src={item.image}
                                  className="w-12 h-12 mx-auto"
                                  alt={item.title}
                                />
                                <span>{item.title}</span>
                                <span> ${item.price.toFixed(2)} </span>
                                <button
                                  className="text-red-500 "
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  X
                                </button>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className=" flex pt-3 pl-5  ">
                        Total Price: ${getTotalPrice().toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-10">
              {products.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </div>

          <div className="footer pt-36">
            <p className="footer-1">
              We Contribute to the Global Reforestation
            </p>
            <br />
            <p className="footer-2 pb-36">
              We plant a tree for each order together with One Tree Planted, A
              non-profit Organization which proceeds the global reforestation
              act simultaneously in North America, Latin America, Asia, Africa,
              Europe and the Pacific in 47+ Countries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
