const Greeting = () => {
  const greeting = 'Hello, world!'
  const date = new Date()
  return (
    <div>
      <h1>{greeting}</h1>
      <p>It is {date.getDate()}.</p>
    </div>
  )
}
export default Greeting