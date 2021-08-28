import "./App.css";

function App() {
  return (
    <div className="App">
      <header class="main-header">
        <nav>
          <h1 id="logo">Chess Board Plugin</h1>
        </nav>
      </header>
      <section class="hero">
        <h2>Welcome to the Chess Board Room</h2>

        <button>Start Game</button>
      </section>
      <section id="locations"></section>
    </div>
  );
}

export default App;
