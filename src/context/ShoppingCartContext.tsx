// context/ShoppingCartContext.tsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Course, CartItem } from '../types/auth';

interface ShoppingCartContext {
        cartItems: CartItem[];
        addToCart: (course: Course) => void;
        removeFromCart: (courseId: string) => void;
        emptyCart: () => void;
        formattedTotal: string;
        successMessage: string;
        clearSuccessMessage: () => void;
}

const ShoppingCartContext = createContext<ShoppingCartContext>(null!);

export const useShoppingCart = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider: React.FC = ({ children }: any) => {
        const [cartItems, setCartItems] = useState<CartItem[]>([]);
        const [successMessage, setSuccessMessage] = useState<string>('');
        useEffect(() => {
                const savedCart = typeof window !== 'undefined' ? localStorage.getItem('cartItems') : null;
                if (savedCart) {
                        setCartItems(JSON.parse(savedCart));
                }
        }, []);
        useEffect(() => {
                if (typeof window !== 'undefined') {
                        localStorage.setItem('cartItems', JSON.stringify(cartItems));
                }
        }, [cartItems]);
        const addToCart = (course: Course) => {
                setCartItems(prevItems => {
                        const isCourseInCart = prevItems.find(item => item._id === course._id);
                        if (isCourseInCart) {
                                return prevItems.map(item =>
                                        item._id === course._id ? { ...item, quantity: item.quantity + 1 } : item
                                );
                        } else {
                                return [...prevItems, { ...course, quantity: 1 }];
                        }
                });
                setSuccessMessage(`Added "${course.title}" to cart!`);
        };
        const clearSuccessMessage = () => setSuccessMessage('');
        const removeFromCart = (courseId: string) => {
                setCartItems(cartItems.filter(item => item._id !== courseId));
        };
        const emptyCart = () => {
                setCartItems([]);
        };
        const total = cartItems.reduce((acc, item) => {
                const numericPrice = item.coursePrice.replace(/[^\d.]/g, '');
                const price = parseFloat(numericPrice);
                return isNaN(price) ? acc : acc + price;
        }, 0);
        const formattedTotal = new Intl.NumberFormat('en-US', {
                style: 'decimal',
                maximumFractionDigits: 0
        }).format(total);
        return (
                <ShoppingCartContext.Provider value={{ cartItems, addToCart, successMessage, clearSuccessMessage, removeFromCart, emptyCart, formattedTotal }}>
                        {children}
                </ShoppingCartContext.Provider>
        );
};