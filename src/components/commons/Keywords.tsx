import React, { ReactElement } from 'react'
import useMovieApi from '../../hooks/useMovieApi';

interface Props {
    movieId: number
}

interface Keywords {
    id: number,
    keywords: {
        id: number,
        name: string
    }[]
}

export default function Keywords(props: Props): ReactElement | null {

    const [keywords, setKeywords] = useMovieApi<Keywords>("get", `movie/${props.movieId}/keywords`);

    if (!keywords || keywords.keywords.length === 0) {
        return null
    }

    return (
        <ul className="Keywords u-list-inline pt-2">
            {keywords.keywords.map(keyword => <li className="list-inline-item" key={keyword.id}>
                <a className="u-tags-v1 g-color-main g-bg-gray-light-v4 g-bg-black--hover g-color-white--hover g-py-4 g-px-10 mb-2" href="#">{keyword.name}</a>
            </li>
            )}
        </ul>
    )
}
