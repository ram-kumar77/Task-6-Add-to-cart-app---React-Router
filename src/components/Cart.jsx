import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product, addToCart, removeFromCart, isProductInCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-cover rounded"
        />
      </Link>
      <h3 className="text-lg font-semibold mt-2">
        <Link to={`/product/${product.id}`}>{product.title}</Link>
      </h3>
      <p className="text-sm text-gray-600">{product.description.slice(0, 50)}...</p>
      <p className="text-xl font-bold mt-2">${product.price}</p>
      <button
        onClick={() =>
          isProductInCart(product.id) ? removeFromCart(product.id) : addToCart(product)
        }
        className={`mt-4 px-4 py-2 text-white rounded ${
          isProductInCart(product.id) ? "bg-red-500" : "bg-blue-500"
        }`}
      >
        {isProductInCart(product.id) ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default Card;
