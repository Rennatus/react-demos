import { useState } from "react";
import "./App.css";
import Navigation from "./views/Navigation/Navigation";
import Products from "./views/Products/Products";
import Recommended from "./views/Recommended/Recommended";
import SideBar from "./views/SideBard/SideBar";
import products from "./db/data";
import Card from "./components/Card";

const App = () => {
  const [selectCategory, setSelectCategory] = useState(null);

  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleChange = (e) => {
    setSelectCategory(e.target.value);
  };

  const handleClick = (e) => {
    setSelectCategory(e.target.value);
  };

  const filteredData = (products, selected, query) => {
    let filteredData = products;
    // input filter
    if (query) {
      filteredData = products.filter(
        (product) =>
          product.title
            .toLocaleLowerCase()
            .indexOf(query.toLocaleLowerCase()) !== -1,
      );
    }
    // select filter
    if (selected) {
      filteredData = filteredData.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected,
      );
    }
    return filteredData;
  };
  const result = filteredData(products, selectCategory, query);
  return (
    <>
      <SideBar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Products result={result} />

    </>
  );
};
export default App;
