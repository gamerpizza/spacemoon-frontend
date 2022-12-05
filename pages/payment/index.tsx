import Link from "next/link"
import AddPayment from "../../components/Profile/AddPayment"

const Payment = () => {
  return (
    <>
      <AddPayment />
      <Link href="/">
        <button
          type="submit"
          className="justify-center ml-14 mb-10 min-w-[300px] bg-gray-200 hover:bg-[#A042E1] hover:text-white text-gray-600 font-comfortaa inline-flex font-semibold py-2 px-4 rounded-lg shadow"
        >
          Place Order
        </button>
      </Link>
    </>
  )
}

export default Payment
