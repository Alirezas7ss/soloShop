import Image from "next/image"
import React from "react"
import Avatar1 from "/public/avatar/avatar1.png"
import Avatar2 from "/public/avatar/avatar2.png"
import Avatar3 from "/public/avatar/avatar3.png"
import Avatar4 from "/public/avatar/avatar4.png"
import Avatar5 from "/public/avatar/avatar5.png"
import Avatar6 from "/public/avatar/avatar6.png"
const items = [
  {
    image: Avatar1,
    title: "tie",
  },
  {
    image: Avatar2,
    title: "coat",
  },
  {
    image: Avatar3,
    title: "sport",
  },
  {
    image: Avatar4,
    title: "style",
  },
  {
    image: Avatar5,
    title: "css",
  },
  {
    image: Avatar6,
    title: "tie",
  },
  {
    image: Avatar1,
    title: "tie",
  },
]
function Avatar() {
  return (
    <div className="relative z-0 -mt-7 flex  items-center justify-center   ">
      <div className="absolute left-1/2 top-0 flex aspect-square w-1/3 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <div className="translate-z-0 absolute inset-0 rounded-full bg-zinc-50 opacity-50 blur-[120px]" />
      </div>
      <div className="flex gap-5 p-10 flex-nowrap overflow-y-hidden overflow-x-scroll scrollbar-hide">
        {items.map((item) => (
          <div style={{ zIndex: "20" }} className="">
            <div className="w-3h-40 flex h-40 items-center  justify-center">
              {/* <div className=" h-32 w-32 rounded-full bg-foreground "> */}
              <div className="relative h-24 w-24 md:h-32  md:w-32 rounded-full bg-foreground ">
                <Image
                  // className="absolute -bottom-1 opacity-0 transition-opacity duration-200  "
                  className="absolute -bottom-1  "
                  src={item.image}
                  alt=""
                  // onLoadingComplete={(image) =>
                  //   image.classList.remove("opacity-0")
                  // }
                />
              </div>
              {/* </div> */}
            </div>
            <div className="flex justify-center">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Avatar
