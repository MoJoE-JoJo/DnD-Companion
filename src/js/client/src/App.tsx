import { CharacterPage } from './Pages/characters/CharacterPage';
import { Navigate, Route, Router } from '@solidjs/router';

import styles from './App.module.css';
import { JSXElement } from 'solid-js';
import { Login } from './Pages/Login/Login';

function Root(props: { children?: JSXElement }) : JSXElement {
  return <div class={styles.App}>
    <header class={styles.header}>
      {props.children}
    </header>
  </div>
}



const App = () => {
  return <Router root={Root}>
    <Route path={"/"} component={() => <Navigate href="/login" />} />
    <Route path={"/login"} component={() => <Login />} />
    <Route path={"/characterpage"} component={() => <CharacterPage />} />
  </Router>;
};

export default App;