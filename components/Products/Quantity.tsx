const Quantity = (props: any) => {
  return (
    <>
      <div className="flex">
        <div className="flex mr-2">
          <button
            onClick={props.addToCart}
            type="button"
            className="font-medium flex justify-center items-center text-black w-5 h-5 bg-[#F5F8FA] hover:text-indigo-500"
          >
            +
          </button>
        </div>

        <p className="text-[#1C1F22] font-comfortaa ml-[11px] mr-[11px]">
          {props.quantity}
        </p>

        <div className="flex ml-2">
          <button
            onClick={props.removeFromCart}
            type="button"
            className="font-medium flex justify-center items-center text-black w-5 h-5 bg-[#F5F8FA] hover:text-indigo-500"
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default Quantity;
