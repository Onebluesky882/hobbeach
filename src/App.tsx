import List from "./components/List";
import bg from "../src/assets/bg.avif";
import "./App.css";
function App() {
  return (
    <div className="container" style={{ backgroundImage: `${bg}` }}>
      <List />
    </div>
  );
}

export default App;
