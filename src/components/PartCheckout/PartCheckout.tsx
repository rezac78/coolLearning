import React from 'react';
import { useShoppingCart } from '@/context/ShoppingCartContext';

export default function PartCheckout({ onPurchase }:any) {
        const { cartItems, formattedTotal } = useShoppingCart();
        return (
                <main className="relative flex-grow flex items-center justify-center">
                        <div className="container mx-auto my-10 p-6 bg-white dark:bg-gray-800 rounded shadow">
                                <h2 className="text-2xl font-bold mb-5 text-center">Confirm Your Purchase</h2>

                                <div className="mb-6">
                                        <h3 className="text-lg font-semibold">Your Cart Items:</h3>
                                        {cartItems.map((item) => (
                                                <div key={item._id} className="flex justify-between items-center py-2 border-b">
                                                        <span className="text-lg">{item.title}</span>
                                                        <span className="font-bold">${item.coursePrice}</span>
                                                </div>
                                        ))}
                                </div>

                                <div className="text-right mb-6">
                                        <p className="text-xl font-bold">Total: <span className="text-green-500">${formattedTotal}</span></p>
                                </div>

                                <div className="text-center">
                                        <button
                                                onClick={onPurchase}
                                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                                        >
                                                Confirm Purchase
                                        </button>
                                </div>
                        </div>
                </main>
        )
}