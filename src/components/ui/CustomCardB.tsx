//https://play.tailwindcss.com/fU7Jx7GTTE
import Image from "next/image";
import React from "react";
import testImage from '/public/avatar/testcardimage.jpg'
import { Star } from "lucide-react";
interface Props {
    beOnShadow: boolean,
}
function CustomCardB({beOnShadow}:Props) {
  return (
    <div>
      <div className="relative flex min-h-screen flex-col justify-center bg-background py-6  sm:py-12">
        <div  className="relative mx-auto group rounded-lg  bg-custom-vc-border-gradient dark:bg-vc-border-gradient  p-px shadow-lg shadow-black/20 ">

        <div className="group  relative h-[420px] w-52 z-20 bg-background  max-w-md overflow-hidden rounded-md  p-[2px] m-[1px]">
          <Image className="rounded-t-lg" alt='' src={testImage} />
          <div className="mx-2 mt-3  ">
            <p className="   ">
               کت خاکستری
            </p>
            <div dir="ltr" className="space-y-2 text-sm">
              <div className="flex items-center space-x-3"><Star /><p className="flex items-center">4</p> </div>
              <div className="">
                <div className="flex justify-between ">
                  <div>4,000,000</div>
                  <div>40%</div>
                </div>
                <div className="text-xs flex items-center text-slate-500">45,000,000</div>
              </div>
            </div>
          </div>
          { beOnShadow &&

          <div className="absolute inset-0 -translate-x-full bg-transparent bg-gradient-to-r from-transparent via-gray-600/20 bg-clip-border group-hover:translate-x-full group-hover:transition group-hover:duration-1000" />
          }
        </div>
        </div>
      </div>
    </div>
  );
}

export default CustomCardB;
