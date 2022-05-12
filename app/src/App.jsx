import logo from './logo.svg';
import styles from './App.module.css';
import { Switch, Match, createSignal } from "solid-js";

function App() {
  const[login, setLogin]  = createSignal(false)
  const[customer, setCustomer]  = createSignal(false)

  console.log(login(),customer())
  return (
    <div class={styles.App}>
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
      <p class="btn btn-primary"  onclick={()=>{setLogin(true);console.log(this)}}>login here</p>

      <Switch fallback={<p>you are not logged in</p>}>
        <Match when={login() && !customer()}>
          <p>you logged in now but you are not a customer</p>
          <p class="btn btn-primary" onclick={()=> {setCustomer(true)}}>become a customer</p>
        </Match>
        <Match when={ login() == true && customer() == true}>
          <p>you are logged in! you are a customer</p>
        </Match>
      </Switch>
    </div>
  );
}

export default App;
