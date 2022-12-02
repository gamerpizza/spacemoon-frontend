import { useSession } from "next-auth/react";
import ProfileSideBar from "../../../components/Profile/ProfileSideBar";
import AddPayment from "../../../components/Profile/AddPayment";

const Addresses = () => {
  const session = useSession();
  return (
    <div className="mx-auto mt-0 md:pl-16 sm:pl-8 sm:flex min-h-[calc(100vh-260px)]">
      <ProfileSideBar />
      <AddPayment />
    </div>
  );
};

export default Addresses;
