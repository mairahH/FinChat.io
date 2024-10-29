"use client";

import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';
import localFont from 'next/font/local';
import './globals.css';

// Define theme context type
interface ThemeContextType {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}

// Load fonts
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

// Create ThemeContext with proper typing
const ThemeContext = createContext<ThemeContextType | null>(null);

interface RootLayoutProps {
  children: ReactNode;
}

// RootLayout marked as a client component
export default function RootLayout({ children }: RootLayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased ${
            isDarkMode ? 'dark' : 'light'
          }`}
        >
          {children}
        </body>
      </html>
    </ThemeContext.Provider>
  );
}
