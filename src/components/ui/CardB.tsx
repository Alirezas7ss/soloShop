//https://play.tailwindcss.com/fU7Jx7GTTE
import React from "react";
interface Props {
    beOnShadow: boolean,
}
function CardB({beOnShadow}:Props) {
  return (
    <div>
      <div className="relative flex min-h-screen flex-col justify-center bg-black py-6 text-white sm:py-12">
        <div  className="relative mx-auto group rounded-lg  bg-vc-border-gradient  p-px shadow-lg shadow-black/20 ">

        <div className="group relative z-20 bg-black w-full max-w-md overflow-hidden rounded-md border border-gray-900 p-4 m-[1px]">
          <h1 className="mb-4 text-lg">Card Title</h1>
          <p className="text-sm text-gray-600">
            Proin nec turpis cursus ligula maximus laoreet. Aenean lacus lacus,
            pulvinar auctor arcu eu, interdum consectetur lorem. Duis eleifend
            nisi viverra, dictum leo sit amet, faucibus urna. Sed consequat
            viverra elit ut aliquam. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </p>
          { beOnShadow &&

          <div className="absolute inset-0 -translate-x-full bg-transparent bg-gradient-to-r from-transparent via-gray-600/20 bg-clip-border group-hover:translate-x-full group-hover:transition group-hover:duration-1000" />
          }
        </div>
        </div>
      </div>
    </div>
  );
}

export default CardB;
