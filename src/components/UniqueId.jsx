import { useId } from "react";

const UniqueId = () => {
  const id = useId();
  return (
    <div>
      <label htmlFor={`${id}-email`}>email:</label>
      <input type="email" id={`${id}-email`} />
      <br />
      <label htmlFor={`${id}-name`}>Name:</label>
      <input type="text" id={`${id}-name`} />
    </div>
  );
};

export default UniqueId;
