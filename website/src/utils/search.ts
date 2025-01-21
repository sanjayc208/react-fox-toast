import documentationData from "@/data/documentation-search.json"

export interface SearchResult {
    title: string
    href: string
    snippet?: string
}

export function debounce<F extends (...args: any[]) => any>(func: F, waitFor: number) {
    let timeout: ReturnType<typeof setTimeout> | null = null

    return (...args: Parameters<F>): void => {
        if (timeout !== null) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => func(...args), waitFor)
    }
}

export function highlight(text: string, query: string): string {
    // Escape special characters in the query to safely use it in a regular expression
    const escapedQuery = query.replace(/[.*+?^=!:${}()|\[\]\/\\]/g, '\\$&');
    console.log('text', text)
    console.log('query', query)
    // Create the regular expression using the escaped query
    const parts = text.split(new RegExp(`(${escapedQuery})`, "gi"));

    return parts.map((part) => (part.toLowerCase() === query.toLowerCase() ? `<mark>${part}</mark>` : part)).join("")
}
export async function advanceSearch(query: string) {
    const results: SearchResult[] = []
    const lowerQuery = query.toLowerCase()
    const mdxContent = await fetch('/api/docs')
    const mdxData: any = await mdxContent.json()

    function searchRecursive(items: any[], parentHref = "") {
        items.forEach((item) => {
            const fullHref = `${parentHref}${item.href}`

            // Extract the path or hash name from the href
            let pathSegment = ""

            // If there's a hash in the href, match it with the hash name
            if (item.href.includes('#')) {
                pathSegment = item.href.split('#').pop() || ""
            } else {
                // Otherwise, match the last part of the path
                pathSegment = item.href.split('/').pop() || ""
            }

            // Retrieve the content from mdxData using the pathSegment (either full path or hash name)
            const mdxSnippet = mdxData[pathSegment] || ""  // Fallback to empty string if not found

            // Check if the title or snippet matches the query
            const snippetMatches = mdxSnippet.toLowerCase().includes(lowerQuery)
            if (item.title.toLowerCase().includes(lowerQuery) || snippetMatches) {

                // Highlight the query in the snippet and create a truncated version
                const highlightedSnippet = getHighlightedSnippet(mdxSnippet, lowerQuery)

                results.push({
                    title: item.title,
                    href: fullHref,
                    snippet: highlightedSnippet, //use mdxSnippet to get the full content instead of highlightedSnippet
                })
            }

            if (item.items) {
                searchRecursive(item.items, fullHref)
            }
        })
    }

    searchRecursive(documentationData)

    return results
}

// Helper function to create the highlighted and truncated snippet
function getHighlightedSnippet(snippet: string, query: string): string {
    const lowerQuery = query.toLowerCase()
    const snippetLines = snippet.split("\n")

    let highlightedSnippet = ""
    let matchedLine = ""

    // Iterate through each line in the snippet and find the first matching one
    for (let line of snippetLines) {
        if (line.toLowerCase().includes(lowerQuery)) {
            matchedLine = line
            break
        }
    }

    if (matchedLine) {
        // Now, truncate the matched line and add ellipsis if necessary
        const matchStartIndex = matchedLine.toLowerCase().indexOf(lowerQuery)
        const matchEndIndex = matchStartIndex + query.length

        // Show the surrounding context of the matched query, truncating at the max length
        const beforeMatch = matchedLine.slice(0, matchStartIndex)
        const afterMatch = matchedLine.slice(matchEndIndex)

        // Truncate the before and after sections if they exceed a certain length
        const maxLength = 100  // This can be adjusted based on your needs
        const beforeTrunc = beforeMatch.length > maxLength ? "..." + beforeMatch.slice(-maxLength) : beforeMatch
        const afterTrunc = afterMatch.length > maxLength ? afterMatch.slice(0, maxLength) + "..." : afterMatch

        highlightedSnippet = beforeTrunc + `<strong>${matchedLine.slice(matchStartIndex, matchEndIndex)}</strong>` + afterTrunc

    } else {
        // If no match is found, just return the first line of the snippet (truncated)
        highlightedSnippet = snippetLines[0].slice(0, 100) + (snippetLines[0].length > 100 ? "..." : "")
    }

    return highlightedSnippet
}

