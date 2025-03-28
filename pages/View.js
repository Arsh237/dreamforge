import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Store/basketSlice';

const App = () => {
  const viewData = useSelector((state) => state.view.viewBasket);
  console.log(viewData)
  const [selectedSize, setSelectedSize] = useState(null);

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({viewData, selectedSize}));
  };

  const sizes = ['8', '9', '9.5', '10', '11', '12'];

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center pt-[128px]">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <img src={viewData.image} alt="Sneakers" className="w-full h-auto" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{viewData.name}</h1>
            <p className="text-xl text-gray-700">{viewData.desc}</p>
            <p className="text-2xl font-bold mt-4">${viewData.sellingprice}</p>
            <div className="mt-4">
              <span className="text-lg font-semibold">Select Size (US)</span>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {sizes.map((size, index) => (
                  <button
                    key={index}
                    className={`border border-gray-300 py-2 ${selectedSize === size ? 'bg-gray-200' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <button className="bg-black text-white py-2 px-4 mt-4 w-full" onClick={handleAddToCart} disabled={!selectedSize}>
              ADD TO CART
            </button>
            <p className="mt-4 text-black-600 font-semibold">*Free Delivery On Order Over $300.00</p>
            <p className="text-gray-500">*T&C applied</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
