"use client";

import { CartItemType } from "../card";

interface Props {
  item: CartItemType;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
}

const CartItem = ({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: Props) => {
  return (
    <div className="bg-gray-200 border border-dashed border-gray-400 rounded-md p-4">
      
      {/* Wrapper */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        {/* LEFT SECTION */}
        <div className="flex flex-row gap-4">
          
          {/* Image */}
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-20 object-cover rounded"
          />

          {/* Text */}
          <div>
            <h2 className="font-semibold text-base sm:text-lg text-black">  
              {item.name}
            </h2>
            <p className="text-sm text-gray-600">
              {item.description}
            </p>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center justify-between md:justify-end gap-6">
          
          {/* Quantity Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onIncrease(item.id)}
              className="w-7 h-7 bg-gray-400 text-black rounded flex items-center justify-center text-sm font-bold active:scale-95"
            >
              +
            </button>

            <span className="text-lg font-semibold min-w-[20px] text-center">
              {item.quantity}
            </span>

            <button
              onClick={() => onDecrease(item.id)}
              className="w-7 h-7 bg-gray-400 text-black rounded flex items-center justify-center text-sm font-bold active:scale-95"
            >
              −
            </button>
          </div>

          {/* Price */}
          <p className="text-[#FF7A18] font-semibold whitespace-nowrap">
            ₦{item.price.toLocaleString()}
          </p>

          {/* Remove */}
          <button
            onClick={() => onRemove(item.id)}
            className="w-6 h-6 bg-[#FF7A18] text-white rounded flex items-center justify-center text-xs"
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
