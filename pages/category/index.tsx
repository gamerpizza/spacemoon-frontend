import { GetStaticProps } from "next";
import Link from "next/link";
import { useState } from "react";

import SideBar from "../../components/Categories/SideBar";
import Products from "../../components/Products/Products";
import { Category } from "../../model/category";
import CategoryAPI from "../../api/category/category";
import Rating from "../../components/Products/Rating";
import * as path from '../../constants/paths'

const Categories = (props: any) => {
  const [values, setValues] = useState([0]);
  const categories = props.categories;
  return (
    <>
      <div className="flex">
        <div className="w-80  ml-24 mt-4">
          <SideBar />

          {props.categories &&
            props.categories.map((category: any) => {
              return (
                <>
                  <Link
                    href={{
                      pathname: `${path.CATEGORIES}/${category.categoryId}`,
                      query: { categories: categories },
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
          <p className="text-center mt-2 font-comfortaa">$0-$999+</p>
        </div>

        <div className="w-3/4">
          {props.categories &&
            props.categories.map((category: Category) => {
              return (
                (
                  <>
                    <div key={category.categoryId}></div>
                    {category.products.length > 0 && (
                      <div>
                        <Products
                          categoryName={category.name}
                          products={
                            category.products.length > 0 && category.products
                          }
                          width={"90%"}
                          gap={false}
                        />
                      </div>
                    )}
                  </>
                )
              );
            })}
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {

    const response = await CategoryAPI.getAllCategories()
    const categories: Category[] = await response.json();

    return {
      props: { categories: categories },
    };
  } catch (error: any) {

    return {
      props: { errCode: 500 },
    };
  }
};

export default Categories;
