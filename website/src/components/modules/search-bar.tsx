"use client"

import { useEffect, useMemo, useState } from "react"
import { Search, Command, FileText } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { advanceSearch, debounce, highlight, type SearchResult } from "@/utils/search"
import Link from "next/link"

export function SearchBar() {
  const [searchedInput, setSearchedInput] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const debouncedSearch = useMemo(
    () =>
      debounce(async (input: string) => {
        setIsLoading(true)
        const results = await advanceSearch(input.trim())
        setFilteredResults(results)
        setIsLoading(false)
      }, 200),
    [],
  )

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault()
        setIsOpen(true)
      }

      if (isOpen && event.key === "Enter" && filteredResults.length > 0) {
        const selected = filteredResults[0]
        window.location.href = `/docs${selected.href}`
        setIsOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, filteredResults])

  useEffect(() => {
    if (searchedInput.length >= 3) {
      debouncedSearch(searchedInput)
    } else {
      setFilteredResults([])
    }
  }, [searchedInput, debouncedSearch])

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open)
        if (!open) {
          setTimeout(() => setSearchedInput(""), 200)
        }
      }}
    >
      <DialogTrigger asChild>
        <div className="relative flex-1 max-w-md cursor-pointer">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500 dark:text-neutral-400" />
          <Input
            className="h-9 w-full pl-10 mr-10 rounded-md border bg-muted shadow-sm md:w-full"
            placeholder="Search documentation..."
            type="search"
          />
          <div className="absolute right-2 top-1/2 hidden -translate-y-1/2 items-center gap-0.5 rounded-sm bg-zinc-200 p-1 text-xs font-mono font-medium dark:bg-neutral-700 sm:flex">
            <Command className="w-3 h-3" />
            <span>k</span>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[650px] p-0 top-[45%] sm:top-[38%]">
        <DialogTitle className="sr-only">Search</DialogTitle>
        <DialogHeader>
          <input
            value={searchedInput}
            onChange={(e) => setSearchedInput(e.target.value)}
            placeholder="Search documentation..."
            autoFocus
            className="h-14 px-4 bg-transparent border-b text-[15px] outline-none w-full"
          />
        </DialogHeader>
        {searchedInput.length > 0 && searchedInput.length < 3 && (
          <p className="mx-auto mt-2 text-sm text-warning">Please enter at least 3 characters.</p>
        )}
        {isLoading ? (
          <p className="mx-auto mt-2 text-sm text-muted-foreground">Searching...</p>
        ) : (
          filteredResults.length === 0 &&
          searchedInput.length >= 3 && (
            <p className="mx-auto mt-2 text-sm text-muted-foreground">
              No results found for <span className="text-primary">{`"${searchedInput}"`}</span>
            </p>
          )
        )}
        <ScrollArea className="max-h-[350px] w-full">
         {filteredResults.length > 0 && <div className="flex flex-col items-start overflow-y-auto px-1 pt-1 pb-4 sm:px-3 w-full">
            {filteredResults.map((item, index) => {
              return (<Link
                key={`${item.href}-${index}`}
                href={`${item.href}`}
                className="p-3 flex flex-col max-w-[620px] gap-0.5 text-[15px] rounded-sm hover:bg-neutral-100 dark:hover:bg-neutral-900 w-full"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center h-full gap-x-2">
                  <FileText className="h-[1.1rem] w-[1.1rem]" />
                  <span className="truncate">{item.title}</span>
                </div>
                {item.snippet && (
                  <p
                    className="truncate text-xs text-neutral-500 dark:text-neutral-400"
                    dangerouslySetInnerHTML={{
                      __html: highlight(item.snippet, searchedInput),
                    }}
                  />
                )}
              </Link>)
})}
          </div>}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

