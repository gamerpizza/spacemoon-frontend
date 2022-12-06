import { useRouter } from "next/router";
import Link from "next/link";

import { Category } from "../../../model/category";
import Products from "../../../components/Products/Products";
import SideBar from "../../../components/Categories/SideBar";
import Rating from "../../../components/Products/Rating";
import CategoryAPI from "../../../api/category/category";
import * as path from "../../../constants/paths";

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
              return (
                <>
                  <Link
                    href={{
                      pathname: `${path.CATEGORIES}/${category.categoryId}`,
                      query: { categories: sideBarCategories },
                    }}
                  >
                    <h1 className="text-[#1C1F22] font-comfortaa text-s px-3 mt-2 mb-2">
                      {category.name}
                    </h1>
                  </Link>
                </>
              );
            })}

          <h1 className="font-unica text-2xl px-3 mt-8 mb-4">RATING</h1>
          <div className="flex items-center px-3 mb-2">
            <Rating />
          </div>
          <div className="flex items-center px-3 mb-2">
            <Rating />
          </div>
          <div className="flex items-center px-3 mb-2">
            <Rating />
          </div>

          <h1 className="font-unica text-2xl mt-8 mb-4 px-3">PRICE RANGE</h1>
          <div className="relative">
            <input
              type="range"
              value="25"
              className="w-full h-2 absolute bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            ></input>
            <input
              type="range"
              value="75"
              className="w-full h-2 absolute bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            ></input>
          </div>
          <p className="text-center mt-2 font-comfortaa_regular">$0-$999+</p>
        </div>
        <div className="w-3/4">
          <div>
            <Products
              addToCart={addToCart}
              categoryName={category.name}
              products={category.products}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async (context: any) => {
  const id = context.params.categoryId;

  try {
    const response = await CategoryAPI.getCategory(id);
    const category: Category = await response.json();
    return {
      props: {
        category: category,
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
    const ids = categories.map((category: any) => category.categoryId);
    const paths = ids.map((id: number) => ({
      params: {
        categoryId: id.toString(),
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
