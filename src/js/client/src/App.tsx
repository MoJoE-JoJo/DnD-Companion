import type { Component } from 'solid-js';

import styles from './App.module.css';
import { CharacterPage } from './Pages/characters/CharacterPage';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <CharacterPage />
      </header>
    </div>
  );
};

export default App;
