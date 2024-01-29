import React from 'react';
import { useShoppingCart } from '@/context/ShoppingCartContext';
import Button from '../Shared/Button/Button';

export default function PartCheckout({ onPurchase }: any) {
        const { cartItems, formattedTotal } = useShoppingCart();
        return (
                <main className="relative flex-grow flex items-center justify-center">
                        <div className="container mx-auto my-10 p-6 bg-white dark:bg-gray-800 rounded shadow">
                                <h2 className="text-2xl text-light-color-Font dark:text-dark-color-Font font-bold mb-4 text-center">Confirm Your Purchase</h2>

                                <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-light-color-Font dark:text-dark-color-Font">Your Cart Items:</h3>
                                        {cartItems.map((item) => (
                                                <div key={item._id} className="flex justify-between items-center py-2 border-b">
                                                        <span className="text-lg text-light-color-Font dark:text-dark-color-Font">{item.title}</span>
                                                        <span className="font-bold text-dark-green dark:text-light-green">${item.coursePrice}</span>
                                                </div>
                                        ))}
                                </div>
                                <div className="text-right mb-6">
                                        <p className="text-xl text-light-color-Font dark:text-dark-color-Font font-bold">Total: <span className="text-dark-green dark:text-light-green">${formattedTotal}</span></p>
                                </div>
                                <div className="text-center">
                                        <Button className="px-4 py-2 bg-dark-blue dark:bg-light-blue mt-2 text-dark-color-Font rounded hover:bg-blue-500 transition duration-300" Click={onPurchase} Type={'child'}>Confirm Purchase</Button>
                                </div>
                        </div>
                </main>
        )
}