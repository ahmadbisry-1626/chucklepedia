import { JokeProps } from "@/type"
import { useQuery } from "react-query"
import { fetchJoke } from "./action"


export const useJoke = (blacklistFlag: string[], isFetchingEnabled: boolean, type: string[]) => {
    return useQuery<JokeProps | null, Error>({
        queryKey: ["joke", blacklistFlag, type],
        queryFn: () => fetchJoke(blacklistFlag, type),
        staleTime: 5 * 60 * 1000,
        retry: 1,
        enabled: isFetchingEnabled
    })
}
