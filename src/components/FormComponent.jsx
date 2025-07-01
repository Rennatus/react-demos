import useInput from "../hooks/useInput";

const FormComponent = () => {
  const name = useInput("");
  const email = useInput("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name:${name.value},Email:${email.value}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" {...name} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="text" {...email} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
