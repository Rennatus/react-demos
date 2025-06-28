const ProductInfo = () => {
  const product = {name:"Laptop",price:1000,availability:"In stock"}

    return (
    <div>
      <h1>{product.name}</h1>
      <h1>Price: {product.price}</h1>
      <h1>{product.availability}</h1>
    </div>
  )
}
export default ProductInfo