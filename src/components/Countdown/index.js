import { useEffect, useState } from "react";

function Countdown() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 0) {
      return;
    }
    const timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return <div> {count} Hooks</div>;
}

export default Countdown;
