import { CharacterPage } from './Pages/characters/CharacterPage';
import { Navigate, redirect, Route, Router, useNavigate } from '@solidjs/router';

import styles from './App.module.css';
import { JSXElement } from 'solid-js';
import { Login } from './Pages/Login/Login';
import { isLoggedIn } from './Helpers/FetchHelper';

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
    <Route path={"/characterpage"} component={() => handleLoginRedirect("/characterpage", <CharacterPage />)} />
  </Router>;
};

function handleLoginRedirect(url: string, component: JSXElement) : JSXElement {
  const navigate = useNavigate(); 
  const userLoggedIn = isLoggedIn();
  if (!userLoggedIn) {
    const newUrl = `/login?redirect=${url}`;
    navigate(newUrl)
  } else {
    return component;
  }
}

export default App;