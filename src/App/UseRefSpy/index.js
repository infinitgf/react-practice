import { useState, useEffect, useRef } from "react";
import "./useRefSpy.css";

export default function UseRefSpy() {
  const [inputValue, setInputValue] = useState("");
  const prevInputValue = useRef("");

  useEffect(() => {
    prevInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <div>
      <h1>Secret Spy</h1>
      <input
        type="password"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="enter your secret"
      />
      <p className="caught">
        {inputValue !== "" ? `caugth:  ${inputValue}` : ""}
      </p>
    </div>
  );
}
