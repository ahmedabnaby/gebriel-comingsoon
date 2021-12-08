import React from "react"

function Preloader() {
  return (
      <div className="preloader">
        <div className="loading">
          <h2>Loading...</h2>
          <span className="progress" />
        </div>
      </div>
  );
}

export default Preloader;
