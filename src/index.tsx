import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";

const App = () => {
  return (
    <div>
      <h1>Hello world!</h1>
      <h2>React App...</h2>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App/>);
