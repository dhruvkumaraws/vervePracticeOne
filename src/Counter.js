import { useState } from "react";

export default function Counter({ firstName, ...props }) {
  console.log(props.initialCount);
  console.log(props.firstName);
  let [counter, setCounter] = useState(props);

  return (
    <>
      <h1>hello world!</h1>
      <h2>Counter: {counter}</h2>
      <button
        onClick={() => {
          console.log("I was clicked");
          setCounter((previousCounter) => previousCounter + 1);
        }}
      >
        Click Me!
      </button>
    </>
  );
}
