'use client'

import { useRef } from "react";
import { Button } from "./button";

function DeleteModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <div className="w-5xl mx-auto mt-24 max-w-[90%]">
      
          <Button
             variant="ghost"
            onClick={() => dialogRef?.current?.showModal()}
            
          >
            Change payment method
          </Button>
        

      <dialog
        ref={dialogRef}
        onSubmit={(ev) => {
          const formData = new FormData(ev.target as HTMLFormElement);
          console.log(formData.get("card-number"));
        }}
        onClick={(ev) => {
          const target = ev.target as HTMLDialogElement;
          if (target.nodeName === "DIALOG") {
            target.close();
          }
        }}
        onClose={(ev) => {
          const target = ev.target as HTMLDialogElement;
          console.log(target.returnValue);
        }}
        className="text-md inset-0  block w-2/3 translate-y-20 rounded-2xl p-0 opacity-0
        transition-[opacity,transform] duration-300 backdrop:backdrop-blur-sm
        [&:not([open])]:pointer-events-none [&[open]]:translate-y-0 [&[open]]:opacity-100"
      >
        <form method="dialog">
          <header className="relative rounded-t-2xl bg-secondary  px-8 pt-6">
            <h1 className="text-2xl font-bold">Change your payment method</h1>
            <button
              type="button"
              onClick={() => dialogRef?.current?.close()}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-md bg-input p-3 text-xl"
            >
              <span className="sr-only">close</span> &times;
            </button>
          </header>
         <main className="bg-secondary pl-[20%]">
            <p>are you sure ?</p>
         </main>
          <footer className="flex justify-end gap-6 rounded-b-2xl bg-secondary px-8 py-4">
            <button
              className="text-gray-400"
              formMethod="dialog"
              value="cancel"
            >
              Cancel
            </button>
            <button
              className="rounded-xl bg-blue-500 px-5 py-3 text-white shadow-md transition-colors hover:bg-blue-600"
              formMethod="dialog"
              value="submit"
            >
              Save changes
            </button>
          </footer>
        </form>
      </dialog>
    </div>
  );
}

export default DeleteModal;
