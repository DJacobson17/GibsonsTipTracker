import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PostProvider } from "./components/postContent";

// import './index.css'
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PostProvider>
      <App />
    </PostProvider>
  </StrictMode>
);
