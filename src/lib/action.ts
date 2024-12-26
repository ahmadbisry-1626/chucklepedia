import { JokeProps } from "@/type"
import { axiosClient } from "./client"


export const fetchJoke = async (): Promise<JokeProps> => {
    try {
        const response = await axiosClient.get(`Any?blacklistFlags=political,racist&type=twopart`)

        return response.data
    } catch (error) {
        console.error(error)
        throw new Error("Failed to fetch joke")
    }
}
