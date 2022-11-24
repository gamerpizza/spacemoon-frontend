import { useRouter } from 'next/router';

import { Category } from '../../../model/category';
import { Product } from '../../../model/product';
import Image from 'next/image';
import defaultImage from '../../../public/images/default-image.jpg';

const UpdateCategory = ({ category }: { category: Category }) => {
  const router = useRouter();

  return (
    <>
      <>
        {console.log(category.name, 'sas')}
        <p className='text-gray-500 text-xs tracking-widest title-font mb-1'>
          {' '}
          {category.name}{' '}
        </p>

        {category.image && (
          <Image
            src={category.image}
            alt='Category Image'
            width={50}
            height={50}
          />
        )}

        {category.products &&
          category.products.map((product: Product) => {
            return (
              <>
                <div>
                  <section className='text-gray-600 body-font'>
                    <div className='container px-5 py-24 mx-auto'>
                      <div className='flexflex-wrap -m-4'></div>

                      <div
                        key={product.productId}
                        className='lg:w-1/4 md:w-1/2 p-4 w-full'
                      ></div>

                      {product.image ? (
                        <Image
                          className='object-cover object-center w-1/4 h-full block'
                          src={category.image}
                          alt='Product Image'
                        />
                      ) : (
                        <Image
                          className='object-cover object-center w-1/4 h-full block'
                          src={defaultImage}
                          alt='Product Image'
                        />
                      )}
                      <p className='text-gray-900 title-font text-lg font-medium'>
                        {product.name}
                      </p>
                      <p className='text-gray-900 title-font text-lg font-medium'>
                        {product.price}
                      </p>
                      <p className='text-gray-900 title-font text-lg font-medium'>
                        {product.rating}
                      </p>
                      <p className='text-gray-900 title-font text-lg font-medium'>
                        {product.description}
                      </p>
                    </div>
                  </section>
                </div>
              </>
            );
          })}


      </>
    </>
  );
};

export const getStaticProps = async (context: any) => {
  const id = context.params.categoryId
  console.log(typeof id);

  try {
    const response = await fetch(`http://localhost:8000/api/category/${id}/get`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'text/plain',
      },
    });
    console.log(response);
    const category: Category = await response.json();
    console.log(category);
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
    const response = await fetch(
      `http:/localhost:8000/api/category/get/0/1000`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'text/plain',
        },
      },
    );

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

export default UpdateCategory;
