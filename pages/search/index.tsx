import Products from "../../components/Products/Products";

const Search = ({addToCart, searchResults}:any) => {
  return (
    <>
      <Products addToCart={addToCart} products={searchResults} />
    </>
  );
};

export default Search;
