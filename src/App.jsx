import React, { useState } from "react";
import "./App.css";
import LandingPage from "./LandingPage.jsx";
import MindARViewer from "./mindar-viewer.jsx";

function App() {
  const [started, setStarted] = useState(null);
  const stopCamera = () => {
    setStarted(null);
  };

  return (
    <main className="App">
      {started === null ? (
        <LandingPage onStart={() => setStarted("aframe")} />
      ) : (
        <>
          <div className="container">
            <MindARViewer />
          </div>
          <div className="camera-controls">
            <button
              className="stop-button"
              onClick={stopCamera}
              onTouchEnd={(event) => {
                event.preventDefault();
                stopCamera();
              }}
              aria-label="Stop camera"
            >
              Stop
            </button>
          </div>
        </>
      )}
    </main>
  );
}

export default App;
