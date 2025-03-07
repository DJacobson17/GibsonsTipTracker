import "./app.css";
import Input from "./components/input";
import Output from "./components/output";
import { usePost } from "./components/postContent";
import ToggleSwitch from "./components/ToggleSwitch";

export default function App() {
  const { solo, setSolo } = usePost();

  return (
    <div className="app">
      <header>
        <h1>Gibsons Tipout Calculator</h1>
      </header>
      <main>
        <Input>
          <ToggleSwitch
            label="POOL"
            // isOn={solo}
            // handleToggle={() => setSolo(!solo)}
            // onColor={"#06D6A0"}
          />
        </Input>
        <Output />
      </main>
    </div>
  );
}
