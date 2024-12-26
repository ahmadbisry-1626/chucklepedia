import { JokeProps } from "@/type"
import { useQuery } from "react-query"
import { fetchJoke } from "./action"


export const useJoke = () => {
    return useQuery<JokeProps, Error>({
        queryKey: ["joke"],
        queryFn: fetchJoke,
        staleTime: 5 * 60 * 1000,
        retry: 1
    })
}
