import Image from 'next/image';
import defaultImage from '../../public/images/default0image.jpg'


const Product = () => {
  return (
    <>
      <div className="flex w-full">
        <div className='w-1/2'>
          <Image src={defaultImage} width={50} height={50} alt="Product Image" />
        </div>
        <div className='w-1/2'>
          <h1>Product Title</h1>

        </div>
      </div>
    </>
   );
}

export default Product;
