import { useState } from "react";

export default function UseState() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>Fav color: {color} !!</h1>
      <div className="btnPanel">
        <button
          className="btnGreen"
          type="button"
          onClick={() => setColor("green")}
        >
          green
        </button>
        <button
          className="btnYellow"
          type="button"
          onClick={() => setColor("yellow")}
        >
          yellow
        </button>
        <button
          className="btnRed"
          type="button"
          onClick={() => setColor("red")}
        >
          red
        </button>
      </div>
    </>
  );
}
