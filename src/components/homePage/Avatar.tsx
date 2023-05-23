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
    <div className="-mt-7 relative flex flex-nowrap items-center justify-center  overflow-y-hidden overflow-x-scroll scrollbar-hide ">
      <div className="absolute top-0 flex items-center justify-center w-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 aspect-square">
          <div className="absolute inset-0 translate-z-0 bg-zinc-50 rounded-full blur-[120px] opacity-50" />
        </div>
      <div className="p-10 flex gap-5">
        {items.map((item) => (
          <div style={{zIndex: "20"}} className="">
            <div className="flex h-40 w-3h-40 items-center  justify-center">
              {/* <div className=" h-32 w-32 rounded-full bg-foreground "> */}
              <div className="relative h-32  w-32 rounded-full bg-foreground ">
                <Image
                  className="absolute -bottom-1  "
                  src={item.image}
                  alt=""
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
