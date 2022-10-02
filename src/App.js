import "./App.css";
import Board from "./Componentes/Board";
// import PlaceBoard from './Componentes/PlaceBoard';
import "dracula-ui/styles/dracula-ui.css";

function App() {
  return (
    <>
      <div className="drac-bg-black container">
        <Board />
      </div>
    </>
  );
}

export default App;
