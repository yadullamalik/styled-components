import "./App.css";
import { Button } from "./Components/Button";

function App() {
  const primary = "primary";
  const def = "default";
  const dashed = "dashed";
  const text = "text";
  const link = "link";

  return (
    <div className="App">
      <Button primary={primary}>Primary Button</Button>
      <Button def={def}>Default Button</Button>
      <Button dashed={dashed}>Dashed Button</Button>
      <br />
      <Button text={text}>Text Button</Button>
      <Button link={link}>Link Button</Button>
    </div>
  );
}

export default App;
