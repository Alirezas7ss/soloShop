import React from "react";

const CardFirst = React.forwardRef(({ title, desc, icon }: any, ref) => {
  return (
    <div
      className={`card relative h-80 w-full cursor-pointer rounded-xl bg-white/10`}
      ref={ref}
    >
      <div className="absolute inset-px z-20 rounded-[inherit] bg-[#171717] p-2">
        <div className="flex h-full flex-col justify-end p-10">
          {icon}
          <div className="mt-3 text-lg text-white/90">{title}</div>
          <p className="mt-4 text-white/60">{desc}</p>
        </div>
      </div>
    </div>
  );
});


export default CardFirst;
