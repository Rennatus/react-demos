import { useEffect } from "react";

const BaseEffect = () => {
  useEffect(() => {
    console.log("basice Effect mounted");
  });
  return (
    <div>
      <h1>Check the console to see the message!</h1>
    </div>
  );
};

export default BaseEffect;
