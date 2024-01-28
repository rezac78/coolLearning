import React, { useEffect } from 'react';
import Links from '../Shared/Link/Link';
import { useShoppingCart } from '@/context/ShoppingCartContext';
import { XMarkIcon } from '@heroicons/react/24/solid';
import ImagePart from '../Shared/ImgPart/Image';
import Alerts from '../Shared/Alert/Alert';

export default function ShoppingCart() {
        const { cartItems, removeFromCart, successMessage, clearSuccessMessage, formattedTotal, emptyCart } = useShoppingCart();
        useEffect(() => {
                if (successMessage) {
                        const timer = setTimeout(() => clearSuccessMessage(), 3000); // Message disappears after 3 seconds
                        return () => clearTimeout(timer);
                }
        }, [successMessage, clearSuccessMessage]);
        return (
                <main className="relative flex-grow flex items-center justify-center">
                        {successMessage && <Alerts Message={successMessage} type={true} />}
                        <div className="container mx-auto p-6">
                                <h1 className="text-2xl text-light-color-Font dark:text-dark-color-Font font-bold mb-4 text-center">Shopping Cart</h1>
                                {cartItems.length === 0 ? (
                                        <div className="text-center">
                                                <p className="text-lg">Your shopping cart is empty.</p>
                                                <p>Click on the link below to view all courses.</p>
                                                <Links className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300" Href={'/courses'} type={'icon'}>
                                                        View All Courses
                                                </Links>
                                        </div>
                                ) : (
                                        <div>
                                                {cartItems.map(item => (
                                                        <div key={item._id} className="flex items-center justify-between border-b border-gray-200 py-4">
                                                                <ImagePart Src={item.coursePhoto} width={500} height={500} className={'h-20 w-20 object-cover mr-4'} />
                                                                <div className="flex-grow">
                                                                        <p className="text-lg text-light-color-Font dark:text-dark-color-Font font-semibold">{item.title}</p>
                                                                        <p className="text-lg text-dark-green dark:text-light-green">${item.coursePrice}</p>
                                                                </div>
                                                                <button onClick={() => removeFromCart(item._id)} className="text-dark-red dark:text-light-red">
                                                                        <XMarkIcon width={15} height={15} />
                                                                </button>
                                                        </div>
                                                ))}
                                                <div className="mt-6">
                                                        <p className="text-xl text-light-color-Font dark:text-dark-color-Font font-bold">Total: <span className="text-dark-green dark:text-light-green">${formattedTotal}</span></p>
                                                        <button className="px-4 py-2 bg-dark-red dark:bg-light-red mt-2 text-dark-color-Font rounded hover:bg-red-500 transition duration-300" onClick={emptyCart}>Empty All Cart</button>
                                                        {/* Implement the button to continue the order process */}
                                                </div>
                                        </div>
                                )}
                        </div>
                </main>
        )
}