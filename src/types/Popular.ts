import Result from "./Result";

export default interface Popular {
    page: number,
    results: Result[],
    total_pages: number,
    total_results: number
}