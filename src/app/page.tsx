"use client";

import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <Head>
        <title>FinChat – Simplify Financial Conversations</title>
        <meta
          name="description"
          content="Seamlessly manage financial conversations in one secure platform."
        />
      </Head>
      <div className={isDarkMode ? styles.dark : styles.light}>
        <h1>Welcome to FinChat</h1>
        <p>Manage your financial conversations in one place.</p>
        <button 
          className={styles.button} 
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </>
  );
}
