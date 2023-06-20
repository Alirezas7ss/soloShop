import Backdrop from "@/components/auth/Backdrop";
import CloseModal from "@/components/auth/CloseModal";
import SignIn from "@/components/auth/SingnIn";
import { FC } from "react";

const page: FC = () => {
  return (
    <div className="">
      <div className="relative">
        <Backdrop />
      </div>
      <div className="fixed mx-auto mt-28 w-fit h-fit inset-0 z-[70] rounded-lg">
        <div className="relative bg-background w-fit h-fit py-10 px-2 rounded-lg">
          <div className="absolute top-4 right-4">
            <CloseModal />
          </div>
          <SignIn />
        </div>
      </div>
    </div>
  );
};

export default page;
