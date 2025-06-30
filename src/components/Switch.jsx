import { useState } from "react";

const Switch = () => {
  const [sw, SetSw] = useState(false);
  return (
    <div>
      {sw ? <span>Dark</span> : <span>Light</span>}
      <br />
      <input type="text" key={sw ? "dark" : "Light"} />
      <button onClick={() => SetSw((s) => !sw)}>Switch</button>
    </div>
  );
};

export default Switch;
