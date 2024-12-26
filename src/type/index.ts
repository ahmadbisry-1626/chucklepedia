type FlagsProps = {
    nsfw: boolean,
    religious: boolean,
    political: boolean,
    racist: boolean,
    sexist: boolean,
    explicit: boolean
}

export type JokeProps = {
    error: boolean
    category: string
    type: string,
    setup: string,
    delivery: string,
    flags: FlagsProps,
    id: number,
    safe: boolean,
    lang: string
}
