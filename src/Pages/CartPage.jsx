import React, { useState } from "react";
import { useCart } from "../utils/useCart";

const CartPage = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();

  const [promoCode, setPromoCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);

  const handleApplyPromoCode = () => {
    const promoRegex = /^#\d{6}$/; // Matches # followed by 6 numbers
    if (promoRegex.test(promoCode)) {
      setDiscountApplied(true);
    } else {
      alert("Invalid promo code! Please enter a valid code (e.g., #123456).");
    }
  };

  const discountedTotal = discountApplied
    ? totalPrice * 0.9 // Apply 10% discount
    : totalPrice;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="mt-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 border-b"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p>${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-2 py-1 bg-gray-300 rounded"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-2 py-1 bg-gray-300 rounded"
                  >
                    +
                  </button>
                </div>
                <div>
                  <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-2 px-4 py-1 text-white bg-red-500 rounded"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-bold">Summary</h3>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            {discountApplied && (
              <p className="text-green-500">
                Discount Applied! 10% Off: -$
                {(totalPrice * 0.1).toFixed(2)}
              </p>
            )}
            <p className="text-xl font-bold">
              Final Price: ${discountedTotal.toFixed(2)}
            </p>
          </div>
          <div className="mt-4">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Enter promo code"
              className="border p-2 rounded w-64"
            />
            <button
              onClick={handleApplyPromoCode}
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Apply Code
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
