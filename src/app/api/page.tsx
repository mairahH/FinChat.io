"use client";

import { useRouter } from 'next/navigation'; // Import useRouter from App Router
import styles from '../../styles/backButton.module.css';

export default function ApiPage() {
  const router = useRouter(); // Initialize router instance

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <button className={styles.backButton} onClick={() => router.back()}>
        ← Back
      </button>
      <h1>Landing Page Mockup</h1>
    </div>
  );
}
