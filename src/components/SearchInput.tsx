"use client"

import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
  useTransition,
  
} from "react"
import debounce from "lodash.debounce"
import { Input } from "./ui/input"
import Spinner from "./ui/spinner"
interface Props {
  inputValue: string
  setInputValue: (value: string) => void
  setOpened: (value: boolean) => void
  isHandling?: boolean
  onSubmitHandler: () => void
  selectedItemIndex: number
  setSelectedItemIndex: Dispatch<SetStateAction<number>>
  setNumOfSearchResults: Dispatch<SetStateAction<number>>
  numOfSearchResults: number
  handleKeyDown: any
}

const SearchInput = ({
  inputValue,
  setInputValue,
  setOpened,
  isHandling,
  onSubmitHandler,
  selectedItemIndex,
  setSelectedItemIndex,
  setNumOfSearchResults,
  numOfSearchResults,
  handleKeyDown

}: Props) => {
  const handleInputFocus = () => {
    setOpened(true)
  }
  
  return (
    <form className="relative " onSubmit={onSubmitHandler}>
      {/* <div className="absolute top-2 right-2">
          <Icons.search />
        </div> */}
      <Input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        onFocus={handleInputFocus}
        onKeyDown={handleKeyDown}
        placeholder="جستوجو ..."
        className="w-[350px] text-base placeholder:text-slate-200 lg:w-[450px]"
      />
      {isHandling && (
        <div className="absolute  left-4 top-2">
          <Spinner />
        </div>
      )}
    </form>
  )
}

export default SearchInput
