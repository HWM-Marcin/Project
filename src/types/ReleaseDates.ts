import ReleaseDate from "./ReleaseDate";

export default interface ReleaseDates {
    id: number,
    results: [{
        iso_3166_1: string,
        release_dates: ReleaseDate[]
    }]
}