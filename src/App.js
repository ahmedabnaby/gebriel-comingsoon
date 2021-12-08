import React from "react"
import Preloader from "./components/Preloader"
import Layers from "./components/Layers"

function App() {
  return (
    <div>
      <Preloader/>
      <div className="wrapper">
        <Layers/>
      </div>
    </div>
  );
}

export default App;
