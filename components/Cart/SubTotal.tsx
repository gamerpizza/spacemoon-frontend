import Link from "next/link";

const SubTotal = (props: any) => {
  return (
    <>
      <div>
        <div className="flex justify-between">
          <h1 className="text-xl font-comfortaa">Cart Subtotal</h1>
          <h1 className="text-3xl font-unica">${props.subTotal}</h1>
        </div>
        <div className="mt-6">
          <Link
            href="/shipping_details"
            className="flex items-center justify-center rounded-md border border-transparent bg-[#A042E1] px-6 py-3 text-base font-comfortaa text-white shadow-sm hover:bg-[#a45ed7]"
          >
            Proceed to Shipping Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default SubTotal;
