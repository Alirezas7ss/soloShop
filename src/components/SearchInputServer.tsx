"use client"

import { ChangeEvent, useCallback, useEffect, useState, useTransition } from "react"
import debounce from 'lodash.debounce'
import { Input } from "./ui/input"
import Spinner from "./ui/spinner"

interface Props {
  inputValue: string
  setInputValue: (value: string) => void
  isHandling?: boolean
}

const SearchInputServer = ({
  searchHandler,
  deactivateSearch,
}: {
  searchHandler: (searchQuery: string) => Promise<void>
  deactivateSearch: () => Promise<void>
}) => {
  const [inputValue, setInputValue] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const [isPending, startTransition] = useTransition()

  const submitHandler = () => {
    console.log(`aa${inputValue}`)

    startTransition(() => {
      searchHandler(inputValue)
    })
  }

  // useEffect(() => {
  //   // if (inputValue.length === 0) {
  //     console.log(`aa${inputValue}`)
  //     startTransition(() => {
  //     console.log(`aa${inputValue}`)

  //       searchHandler(inputValue)
  //     })
  //   // }
  // }, [inputValue])

  const request = debounce(async (inputValue: string) => {const result = await searchHandler(inputValue)
    setLoading(false)
  }, 500)

  const debounceRequest = useCallback(
    (searchTerm: string) => request(searchTerm),
    []
  )
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    startTransition(() => {
    setLoading(true)
    setInputValue(e.target.value)
    debounceRequest(e.target.value)
     } )
  }

  return (
    <form action={submitHandler} className="relative ">
        {/* <div className="absolute top-2 right-2">
          <Icons.search />
        </div> */}
      <Input
        value={inputValue}
        onChange={onChange}
        placeholder="جستوجو ..."
        className="text-base placeholder:text-slate-200 w-[350px] lg:w-[450px]"
      />
      {loading   && (
        <div className="absolute  top-2 left-4">
          <Spinner />
        </div>
      )}
      
    </form>
  )
}

export default SearchInputServer
