import { Method } from 'axios';
import { useEffect, useState } from 'react'
import MovieApi from '../shared/MovieApi';

type Setter<T> = (data: T) => void

export default function useMovieApi<T>(method: Method, path: string): [T | undefined, Setter<T>] {

    const [state, setState] = useState<T>();
    useEffect(() => {
        MovieApi<T>(method, path, setState);
    }, [method, path]);
    return [state, setState];
}