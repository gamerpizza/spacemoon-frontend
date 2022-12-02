import CartItem from "../../components/Cart/CartItem";
import SubTotal from "../../components/Cart/SubTotal";
const Cart = (props: any) => {
  return (
    <>
      <div className="ml-20 mt-10 relative">
        <div className="flex">
          <h1 className="font-unica text-3xl">SHOPPING CART</h1>
          <div className="flex justify-center items-center bg-[#F5F8FA] ml-4 p-2 pl-4 pr-4 rounded-full">
            <p className="font-comfortaa text-sm text-[#1C1F22]">
              {Object.keys(props.cart).length} items
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="flex-col  p-4  bg-white dark:bg-gray-800">
            {props.cart &&
              Object.keys(props.cart).map((item) => {
                return (
                  <div key={item}>
                    <div className="flex  flex-wrap py-6">
                      <CartItem addToCart = {props.addToCart} removeFromCart = {props.removeFromCart} item = {item} name={props.cart[item].name}  price={props.cart[item].price} quantity = {props.cart[item].quantity}/>
                    </div>
                    <br />
                  </div>
                );
              })}
          </div>

          <div className="2xl:ml-10 md:ml-12 h-80 flex justify-center items-center">
            <div className="bg-[#F5F8FA] sm: w-[350px] md:w-[450px] lg:w-[500px] p-12   rounded-xl">
             <SubTotal subTotal = {props.subTotal} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
