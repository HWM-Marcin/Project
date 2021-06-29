import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom';
import Result from '../types/Result';
import LoadImage from './helper/LoadImage';

interface Props {
    result: Result,
    className?: string
}

export default function ResultListItem(props: Props): ReactElement {
    const result = props.result;
    return (

        <div className={`ResultListItem ${props.className} col-sm-6 col-md-4 col-lg-3 g-px-10 g-mb-20`}>
            <Link to={`/movie/${result.id}`}>
                <article className="aspect-ratio aspect-ratio-2-3">
                    <LoadImage url={result.poster_path} size="h632" />
                </article>
            </Link >
        </div>

    )
}
