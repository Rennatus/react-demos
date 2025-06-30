import { useState } from "react";
import PopupContent from "./PopupContent";
const CopyInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [copied, setCoied] = useState(false);

  const handlerCopy = () => {
    navigator.clipboard.writeText(inputValue).then(() => {
      setCoied(true);
      setTimeout(() => setCoied(false), 2000);
    });
  };
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handlerCopy}>Copy</button>
      <PopupContent copied={copied} />
    </div>
  );
};

export default CopyInput;
