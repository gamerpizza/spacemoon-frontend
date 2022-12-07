import { useRouter } from "next/router";
import Link from "next/link";

import { Category } from "../../../model/category";
import Products from "../../../components/Products/Products";
import SideBar from "../../../components/Categories/SideBar";
import Rating from "../../../components/Products/Rating";
import CategoryAPI from "../../../api/category/category";
import * as path from "../../../constants/paths";
import PriceRange from "../../../components/PriceRange/PriceRange";

const SingleCategory = ({categories, category, addToCart}: any) => {
  const router = useRouter();
  const sideBarCategories = router.query.categories;

  return (
    <>
      <div className="flex">
        <div className=" w-80  ml-24 mt-4">
          <SideBar />
          {categories &&
            categories.map((category: any) => {
              console.log('car',category[Object.keys(category)[0]].products)
              return (
                <>
                  <Link
                    href={{
                      pathname: `${path.CATEGORIES}/${category[Object.keys(category)[0]].name}`,
                      query: { categories: sideBarCategories },
                    }}
                  >
                    <h1 className="text-[#1C1F22] font-comfortaa text-s px-3 mt-2 mb-2">
                      {category[Object.keys(category)[0]].name}
                    </h1>
                  </Link>
                </>
              );
            })}

          <h1 className="font-unica text-2xl px-3 mt-8 mb-4">RATING</h1>
          <div className="flex items-center px-3 mb-2">
            <Rating stars={5}/>
          </div>
          <div className="flex items-center px-3 mb-2">
            <Rating stars={4}/>
          </div>
          <div className="flex items-center px-3 mb-2">
            <Rating stars={3}/>
          </div>

          <h1 className="font-unica text-2xl mt-8 mb-4 px-3">PRICE RANGE</h1>
          <PriceRange />

          <p className="text-center mt-2 font-comfortaa_regular">$0-$999+</p>
        </div>
        <div className="w-3/4">
          <div>
            <Products
              addToCart={addToCart}

              categoryName={category.name}
              products={category.products !== null && category.products}

            />
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async (context: any) => {
  const name = context.params.categoryName;

  try {
    const response = await CategoryAPI.getCategory(name);
    const singleCategory: Category = await response.json();
    return {
      props: {
        category: singleCategory,
      },
    };
  } catch (error: any) {
    return {
      props: { errCode: 500, message: error },
    };
  }
};

export const getStaticPaths = async () => {
  try {
    const response = await CategoryAPI.getAllCategories();

    const categories = await response.json();
    const arrayOfCategories = Object.entries(categories).map((e) => ( { [e[0]]: e[1] } ))
    const names = arrayOfCategories.map((category: any) => category[Object.keys(category)[0]].name);
    const paths = names.map((name: string) => ({
      params: {
        categoryName: name.toString(),
      },
    }));
    return {
      paths,
      fallback: false,
    };
  } catch (error: any) {
    return {
      props: { errCode: 500, message: error },
    };
  }
};

export default SingleCategory;
