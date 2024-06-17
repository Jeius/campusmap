import { getSearchResult } from "@/lib/fetchers";
import { AnimatedLi, } from "./ui/animated";

const highlightText = (text: string, query: string) => {
    if (!query) return text;

    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? <strong key={index}>{part}</strong> : part
    );
};


export const SearchResults = async ({ query }: { query: string | string[] | undefined }) => {
    const searchResults = await getSearchResult(query);

    return (
        searchResults.length !== 0
            ? searchResults.map((result, index) => (
                <AnimatedLi
                    key={index}
                    className={`relative flex items-center p-2 min-h-14 
                        text-sm my-1 rounded-xl bg-primary bg-opacity-90 cursor-pointer`}
                >
                    <span>
                        {result.facility
                            ? highlightText(`${result.name}, ${result.facility.name}`, typeof query === 'string' ? query : query![0])
                            : highlightText(result.name, typeof query === 'string' ? query : query![0])
                        }
                    </span>
                </AnimatedLi>
            ))
            : <AnimatedLi
                key="noResults"
                className="place-self-center text-sm overflow-hidden">
                No results found
            </AnimatedLi>
    );
};