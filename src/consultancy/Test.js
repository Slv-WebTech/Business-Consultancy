import React, { useState, useEffect } from "react";

function App() {
  return (
    <div>
      <div
        // Start countdown on hover
        // onMouseLeave={() => setHovered(false)} // Stop countdown when not hovering
        style={{ width: "100%", height: "50em", background: "orange" }}
      >
        <h1>Countdown: </h1>
      </div>
    </div>
  );
}

export default App;
