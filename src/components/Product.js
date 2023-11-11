import React, { useState } from "react";

const Product = ({ product, onAddToCart }) => {
  const { id, title, image, price } = product;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className=" text-left mx-auto relative">
      <img
        src={image}
        alt={title}
        className="transition duration-300 ease-in-out hover:shadow-lg dark:hover:shadow-black/30 rounded-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      {isHovered && (
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-1 bg-white p-2 rounded shadow-md transition duration-300 ease-in-out hover:opacity-100  "
          onMouseEnter={() => setIsHovered(true)}
        >
          <button onClick={() => onAddToCart(product.id)}>Add to Cart</button>
        </div>
      )}
      <p className="product-title ">{title}</p>
      <p className="product-price">${price.toFixed(2)} USD</p>
    </div>
  );
};

export default Product;
