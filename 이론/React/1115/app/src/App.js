import "./App.css";

function Header() {
  return (
    <header>
      <h1>
        <a href="index.html">WEB</a>
      </h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href=" 1.html">html</a>
        </li>
        <li>
          <a href=" 2.css">css</a>
        </li>
        <li>
          <a href=" 3.js">js</a>
        </li>
      </ul>
    </nav>
  );
}

function Article() {
  return (
    <article>
      <h2>WELCOM</h2>
      Hello, WEB
    </article>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Article />
    </div>
  );
}

export default App;
