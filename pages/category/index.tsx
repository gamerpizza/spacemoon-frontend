import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Category } from '../../model/category';
import { Product } from '../../model/product';

const Categories = (props: any) => {


  return (
    <>
      <h1 className='text-center  font-caslon text-9xl'> CATEGORIES </h1>
      {props.categories &&
      props.categories.map((category :any) => {
        return(
          <>
          <Link href={`/category/${category.categoryId}`}>
          <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
            {category.name}
          </h3>
          </Link>
          </>

        )
      })}

      {props.categories &&
        props.categories.map((category: Category) => {
          return (
            <>
              <div key={category.categoryId}></div>

              {category.image && (
                <Image src={category.image} alt='Category Image' width={512} height={512}/>
              )}

              {category.products &&
                category.products.map((product: Product) => {
                  return (
                    <div>
                      <section className='text-gray-600 body-font'>
                        <div className='container px-5 py-24 mx-auto'>
                          <div className='flexflex-wrap -m-4'>
                            <div
                              key={product.productId}
                              className='lg:w-1/4 md:w-1/2 p-4 w-full'
                            >
                              <Image
                                alt='ecommerce'
                                className='object-cover object-center w-full h-full block'
                                src='https://dummyimage.com/420x260'
                                width={200}
                                height={200}
                              />
                              <div className='mt-4'>
                                <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
                                  {category.name}
                                </h3>
                                <h2 className='text-gray-900 title-font text-lg font-medium'>
                                  {product.name}
                                </h2>
                                <p className='mt-1'>{product.price}</p>
                              </div>
                              <button
                                onClick={() =>
                                  props.addToCart(
                                    product.productId,
                                    '',
                                    1,
                                    product.price,
                                    product.name,
                                  )
                                }
                                className='flex  mt-2 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'
                              >
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  );
                })}


            </>
          );
        })}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch(`http:/localhost:8000/api/category/get/0/100`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'text/plain',
      },
    });
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
