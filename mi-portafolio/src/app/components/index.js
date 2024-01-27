import React from 'react';
import styles from './index.module.css';

export default function index() {
  return (
    <main className={styles.main}>
      <Profile />
      <Facts />
      <Buttons />
      <Tabs />
      <ProjectContainer />
    </main>
  );
}
