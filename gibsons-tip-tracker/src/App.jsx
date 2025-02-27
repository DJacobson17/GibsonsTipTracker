import "./app.css";
import Input from "./components/input";
import Output from "./components/output";
import { PostProvider } from "./components/postContent";

export default function App() {
  return (
    <div className="app">
      <header>
        <h1>Gibsons Tipout Calculator</h1>
      </header>
      <PostProvider>
        <main>
          <Input />
          <Output />
        </main>
      </PostProvider>
    </div>
  );
}
