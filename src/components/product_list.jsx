const ProductList = () => {
  const products = [
    {id:"1",name:"Laptop",price:"$1000"},
    {id:"2",name:"Phone",price:"$500"},
    {id:"3",name:"Tablet",price:"$300"},
  ]
  return (
    <div>
      <h1>Product List</h1>
      {products.map(p=>(
        <div key={p.id}>
        <h1>{p.name}</h1>
        <h1>Price: {p.price}</h1>
        </div>
      ))}
    </div>
  )
}
export default ProductList