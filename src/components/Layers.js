import ContactForm from "./ContactForm"
import React from "react"

function Layers() {
  return (
    <ul
    className="scene unselectable"
    data-friction-x="0.1"
    data-friction-y="0.1"
    data-scalar-x={25}
    data-scalar-y={15}
    id="scene"
  >
    <li className="layer" data-depth={0.0}></li>
    {/* BG */}
    <li className="layer" data-depth="0.10">
      <div className="background"></div>
    </li>
    {/* Hero */}
    <li className="layer" data-depth="0.20">
      <div className="title">
        <h2>Stay tuned!</h2>
        <span className="line" />
      </div>
    </li>
    {/* <li className="layer" data-depth="0.25">
      <div className="sphere">
        <img alt="sphere" src="images/sphere.png" />
      </div>
    </li> */}
    <li className="layer" data-depth="0.30">
      <div className="hero">
        <h1 id="countdown">The most spectacular coming soon template!</h1>
        <p className="sub-title">Coming Soon!</p>
      </div>
    </li>
    {/* Flakes */}
    {/* <li className="layer" data-depth="0.40">
      <div className="depth-1 flake1">
        <img alt="flake" src="images/flakes/depth1/flakes1.png" />
      </div>
      <div className="depth-1 flake2">
        <img alt="flake" src="images/flakes/depth1/flakes2.png" />
      </div>
      <div className="depth-1 flake3">
        <img alt="flake" src="images/flakes/depth1/flakes3.png" />
      </div>
      <div className="depth-1 flake4">
        <img alt="flake" src="images/flakes/depth1/flakes4.png" />
      </div>
    </li> */}
    <li className="layer" data-depth="0.50">
      <div className="depth-2 flake1">
        <img alt="flake" src="images/flakes/depth2/flakes1.png" />
      </div>
      {/* <div className="depth-2 flake2">
        <img alt="flake" src="images/flakes/depth2/flakes2.png" />
      </div> */}
    </li>
    {/* <li className="layer" data-depth="0.60">
      <div className="depth-3 flake1">
        <img alt="flake" src="images/flakes/depth3/flakes1.png" />
      </div>
      <div className="depth-3 flake2">
        <img alt="flake" src="images/flakes/depth3/flakes2.png" />
      </div>
      <div className="depth-3 flake3">
        <img alt="flake" src="images/flakes/depth3/flakes3.png" />
      </div>
      <div className="depth-3 flake4">
        <img alt="flake" src="images/flakes/depth3/flakes4.png" />
      </div>
    </li> */}
    <li className="layer" data-depth="0.80">
      <div className="depth-4">
        <img alt="flake" src="images/flakes/depth4/flakes.png" />
      </div>
    </li>
    <li className="layer" data-depth={1.0}>
      <div className="depth-5">
        <img alt="flake" src="images/flakes/depth5/flakes.png" />
      </div>
    </li>
    {/* Contact */}
    <li className="layer" data-depth="0.20">
      <div className="contact">
        <a
          className="mail"
          href="mailto:customerservice@gebriel-motors.com"
        >
          customerservice@gebriel-motors.com
        </a>
      </div>
    </li>
    
    <li className="layer" data-depth="0.40">
      <div className="container">
        <ContactForm/>
      </div>
    </li>

  </ul>
  
  );
}

export default Layers;
