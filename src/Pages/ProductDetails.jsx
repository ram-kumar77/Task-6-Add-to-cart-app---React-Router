import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../utils/useCart";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, isProductInCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4">
      <img src={product.image} alt={product.title} className="w-64 h-64" />
      <h1 className="text-2xl font-bold mt-2">{product.title}</h1>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-xl font-bold mt-2">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className={`mt-4 px-4 py-2 text-white rounded ${
          isProductInCart(product.id) ? "bg-red-500" : "bg-blue-500"
        }`}
      >
        {isProductInCart(product.id) ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductDetails;
