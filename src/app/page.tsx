"use client"
import Header from "@/components/Header";
import { useState, useEffect } from 'react';

export default function Home() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(storedTheme);
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };
  return (
    <div className={`bg-red-600	 dark:bg-blue-100 ${theme === 'dark' ? 'dark' : ''}`}>
      <Header toggleTheme={toggleTheme} currentTheme={theme} />
    </div>
  )
}
