import type { Component } from 'solid-js';

import styles from './App.module.css';
import { CharacterPage } from './Pages/characters/CharacterPage';
import { DndcContextProvider } from "./Components/context";

const App: Component = () => {
  return (
    <DndcContextProvider>
      <div class={styles.App}>
        <header class={styles.header}>
          <CharacterPage />
        </header>
      </div>
    </DndcContextProvider>
  );
};

export default App;
