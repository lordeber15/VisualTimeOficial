import style from "./App.module.css";
import Inicio from "./components/Inicio/inicio";

// import Navbar from "./components/NavBar/Navbar";
import About from "./components/About/About";
import Clientes from "./components/Clientes/Clientes";
import Galeria from "./components/Galeria/Galeria";

function App() {
  return (
    <div className={style.container}>
      {/* <Navbar /> */}
      <Inicio />
      <Galeria />
      <Clientes />
      <About />
    </div>
  );
}

export default App;
