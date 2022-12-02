import Products from "../../components/Products/Products";

const Search = (props: any) => {
  return (
    <>
      <Products addToCart={props.addToCart} products={props.searchResults} />
    </>
  );
};

export default Search;
