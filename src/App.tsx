import { Button, ColorInputBar } from './components';
import '@fontsource-variable/inter/wght.css';
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Hero Color Peeker</h1>
      <ColorInputBar />
      <Button title="Start" />
    </div>
  );
}

export default App;
