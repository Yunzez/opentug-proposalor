
import styles from './App.module.css';
import { Switch, Match, createSignal } from "solid-js";
import starter from './pages/starter';
import intro from './pages/intro';
import documentEditer from './pages/documentEditer';

function App() {
  const [login, setLogin] = createSignal(false)
  const [customer, setCustomer] = createSignal(false)

  console.log(login(), customer())
  return (
    <div class="min-vh-100">
      {/* <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header> */}


      {/* <p class="btn btn-primary"  onclick={()=>{setLogin(true);console.log(this)}}>login here</p> */}
      {/* !!!!!!!!!!!!! this is solid built in routing, kinda sucks, check out https://github.com/solidjs/solid-app-router to get better rounter */}
      <Switch fallback={<p>loading error</p>}> 
        <Match when={!login() && !customer()}>
          {starter(setLogin)}
        </Match>
        <Match when={login() && !customer()}>
          {intro(setCustomer)}
          {/* <p class="btn btn-primary" onclick={() => { setCustomer(true) }}>get</p> */}
        </Match>
        <Match when={login() == true && customer() == true}>
          {documentEditer}
        </Match>
      </Switch>
    </div>
  );
}

export default App;
