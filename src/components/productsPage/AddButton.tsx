"use client"
import React, { useState } from "react"
import { useStateWithDeps } from "swr/_internal"
import { Digit } from "../Digit"
import { Icons } from "../icons"
const fontSize = 15

function AddButton() {
  const [value, SetValue] = useState(0)
  const [timeClick, SetTimeClick] = useState(false)
  function plusHandler() {
    SetValue(value + 1)
    if (!timeClick) {
      SetTimeClick(true)
      const timer = setTimeout(() => {
        SetTimeClick(false)
      }, 7000)
    }
  }
  function minusHandler() {
    SetValue(value - 1)
  }
  function openHandler() {
    if (!timeClick) {
      SetTimeClick(true)
      const timer = setTimeout(() => {
        SetTimeClick(false)
      }, 7000)
    }
  }
  return (
    <div className="pr-1 ">
        <div className={`${ !timeClick && "hidden"}`}>
          <div
            onMouseEnter={() => SetTimeClick(true)}
            onMouseLeave={() => SetTimeClick(false)}
            className={` flex rounded-md  border-2 border-accent`}
          >
            <button
              disabled={value === 0}
              className={` ${
                value === 0 && "hover:bg-transparent disabled:cursor-auto"
              } flex w-6 items-center justify-center text-foreground hover:bg-accent `}
              onClick={minusHandler}
            >
              <Icons.minus size={15} />
            </button>
            <div
              // style={{ fontSize }}
              className="flex space-x-3 overflow-hidden rounded  px-2 leading-none text-foreground"
            >
              <Digit place={1} value={value} />
            </div>
            <button
              onClick={plusHandler}
              disabled={value === 3}
              className={` ${
                value === 3 && "hover:bg-transparent disabled:cursor-auto"
              } flex w-6 items-center justify-center text-foreground hover:bg-accent `}
            >
              <Icons.plus size={15} />
            </button>
          </div>
        </div>
      {!timeClick && (
        <div
          onMouseEnter={() => SetTimeClick(true)}
          onMouseLeave={() => SetTimeClick(false)}
        >
          <button
            onClick={plusHandler}
            className={`${
              value > 0 && "hidden"
            }  flex justify-center rounded-full border border-accent p-1 text-foreground hover:bg-accent`}
          >
            <div className={`${value > 0 && "hidden"}  `}>
              <Icons.plus size={15} />{" "}
            </div>
          </button>
          <button
            onClick={openHandler}
            className={`${
              value === 0 && "hidden"
            } flex  items-center justify-center rounded-full border border-accent p-1 text-foreground hover:bg-accent`}
          >
            <p
              className={` mt-[1.25px] flex h-4  w-4 items-center justify-center text-center text-sm `}
            >
              {value}
            </p>
          </button>
        </div>
      )}
    </div>
  )
}

export default AddButton
