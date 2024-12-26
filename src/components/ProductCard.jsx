import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, addToCart, isProductInCart }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-xl transition">
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
      <div className="flex justify-between items-center mt-2">
        <span className="text-xl font-bold">${product.price}</span>
        <button
          onClick={() => addToCart(product)}
          className={`px-4 py-2 text-white rounded ${
            isProductInCart(product.id) ? "bg-red-500" : "bg-blue-500"
          }`}
        >
          {isProductInCart(product.id) ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
