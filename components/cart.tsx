"use client";

import { useState } from "react";
import CartItem from "./foods";
import { CartItemType } from "./card";

export default function Home() {
  const [items, setItems] = useState<CartItemType[]>([
    {
      id: 1,
      name: "Jollof Rice & Fried Chicken",
      description: "With plantain, extra pepper sauce",
      price: 3200,
      image: "/img/ricee.png",
      quantity: 1,
    },
    {
      id: 2,
      name: "Jollof Rice & Fried Chicken",
      description: "With plantain, extra pepper sauce",
      price: 3200,
      image: "/img/egusi.png",
      quantity: 1,
    },
    {
      id: 3,
      name: "Jollof Rice & Fried Chicken",
      description: "With plantain, extra pepper sauce",
      price: 3200,
      image: "/img/spic.png",
      quantity: 1,
    },
    {
      id: 4,
      name: "Jollof Rice & Fried Chicken",
      description: "With plantain, extra pepper sauce",
      price: 3200,
      image: "/img/rice.png",
      quantity: 1,
    },
  ]);

  // Increase quantity
  const increase = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decrease = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item
  const remove = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Add More Items (WORKING)
  const addMoreItems = () => {
    const newItem: CartItemType = {
      id: Date.now(),
      name: "Egusi Soup & Pounded Yam",
      description: "Rich and savory Egusi soup with assorted meats",
      price: 3500,
      image: "/img/egusi.png",
      quantity: 1,
    };

    setItems((prev) => [...prev, newItem]); 
  };

  return (
    <main className="bg-gray-100 flex justify-center items-center lg:h-screen  min-h-[300px] p-6">
      <div className="max-w-5xl mx-auto p-4">
        
        <h1 className="text-xl font-bold mb-4">
          Your Cart
        </h1>

        <div className="space-y-4">
          {items.map((item) => (
           <CartItem
             key={item.id}
             item={item}
             onIncrease={increase}
             onDecrease={decrease}
             onRemove={remove}
           />

          ))}
        </div>

        {/* WORKING ADD MORE */}
        <button
          onClick={addMoreItems}
          className="text-sm text-blue-600 mt-4 hover:underline"
        >
          + Add more items from Chuks Kitchen
        </button>
      </div>
    </main>
  );
}
