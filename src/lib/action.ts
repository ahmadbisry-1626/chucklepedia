import { JokeProps } from "@/type"
import { axiosClient } from "./client"


export const fetchJoke = async (blacklistFlag: string[], type: string[]): Promise<JokeProps> => {
    try {
        const blacklistQuery = blacklistFlag.length > 0 ? `blacklistFlags=${blacklistFlag.join(',')}` : ''
        const typeQuery = type.length > 0 ? `${type.join(',')}` : 'Any'

        const response = await axiosClient.get(`${typeQuery}?${blacklistQuery}&type=twopart`)

        return response.data
    } catch (error) {
        console.error(error)
        throw new Error("Failed to fetch joke")
    }
}
