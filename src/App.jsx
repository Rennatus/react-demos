import Card from "./components/card.jsx"

const App = () => {
  return (
    <>
      <h1>My Card</h1>
      <Card>
        <h2>Card Title</h2>
        <p>This is some content for card 1</p>
      </Card>
      <Card>
        <h2>Card Title</h2>
        <p>This is some content for card 2</p>
      </Card>
    </>
  )
}
export default App
