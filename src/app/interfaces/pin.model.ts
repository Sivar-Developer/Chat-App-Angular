export interface Pin {
    id: number,
    url: string,
    title: string,
    author: {
        name: string,
        profile_url: string,
        collection_name: string
    }
}
