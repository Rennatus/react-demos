const EventDemo = () => {
  const Button = () => {
    const handler_click = () => console.log(Math.round(Math.random() * 10));
    return <button onClick={handler_click}>Click</button>;
  };
  const Copy = () => {
    const copy_handler = () => console.log("stop stealing my content!");
    return (
      <p onCopy={copy_handler}>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        voluptatibus libero, eius odit modi doloremque quos magni tempora.
        Debitis laborum exercitationem perferendis. Veritatis fuga, quod quasi
        accusamus eveniet voluptates suscipit.
      </p>
    );
  };

  const Move = () => {
    const move_handler = () => {
      alert("Mouse Move Event Fired!");
      console.log("Mouse Move Event Fired!");
    };
    return (
      <p onMouseOver={move_handler}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        voluptatibus libero, eius odit modi doloremque quos magni tempora.
        Debitis laborum exercitationem perferendis. Veritatis fuga, quod quasi
        accusamus eveniet voluptates suscipit.
      </p>
    );
  };
  return (
    <div>
      <Button />
      <Copy />
      <Move />
    </div>
  );
};

export default EventDemo;
