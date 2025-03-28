import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../Store/basketSlice'; // Update with correct action imports

function Cart() {
  const dispatch = useDispatch();
  const basketData = useSelector((state) => state.basket.basket);
  console.log(basketData)

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Shopping Cart</h1>
      {basketData.length > 0 ? (
        <table className="w-full text-left">
          <thead>
            <tr>
              <th>Products</th>
              <th>Size</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {basketData.map((item, index) => (
              <tr key={index}>
                <td className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                  <span className="ml-4">{item.name}</span>
                </td>
                <td>{item.size}</td>
                <td>${item.sellingprice}</td>
                <td>
                  <div className="flex items-center">
                    <button  className="px-2">-</button>
                    <span className="mx-2">{item.qty}</span>
                    <button  className="px-2">+</button>
                  </div>
                </td>
                <td>₹{item.total}</td>
                <td>
                  <button className="px-4 py-2 bg-red-500 text-white rounded">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center">
          <p>Your cart is empty.</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
