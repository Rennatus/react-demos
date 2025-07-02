import "./Products.css";
import Card from "../../components/Card"

const Products = ({result}) => {
  console.log(result)
  return (
    <>
      <section className="card-container">
        {result.map(({img, title, reviews, prevPrice,newPrice})=>( 
        <Card
        key={Math.random()}
        img={img}
        title={title}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />))}
      </section>
    </>
  );
};

export default Products;