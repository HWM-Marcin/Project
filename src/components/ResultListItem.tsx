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

        <div className={`ResultListItem ${props.className ? props.className : ''} col-sm-6 col-md-4 col-lg-3 g-px-10 g-mb-20`}>
            <article>
                <Link to={`/movie/${result.id}`}>
                    <LoadImage url={result.poster_path} size="h632" ratio="aspect-ratio-2-3" />
                </Link >
            </article>
        </div>

    )
}
