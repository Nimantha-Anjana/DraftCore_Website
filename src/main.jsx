import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/draftcore.css";
import App from "./App";

class Boundary extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(error) { return { error }; }
  render() {
    if (!this.state.error) return this.props.children;
    return (
      <pre style={{ padding: 24, color: "#ff8a8a", whiteSpace: "pre-wrap", fontFamily: "monospace" }}>
        {"Something went wrong:\n\n" + String(this.state.error?.stack || this.state.error)}
      </pre>
    );
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Boundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Boundary>
  </React.StrictMode>
);
