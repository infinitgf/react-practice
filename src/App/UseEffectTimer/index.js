import { useState, useEffect } from "react";

export default function UseEffectTimer() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    count > 0 &&
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
  });

  const restartTimer = () => {
    if (count === 0) {
      setCount(count + 5);
    }
  };

  return (
    <>
      <h1>The final countdown: {count}</h1>
      <button onClick={restartTimer}>restart</button>
    </>
  );
}
