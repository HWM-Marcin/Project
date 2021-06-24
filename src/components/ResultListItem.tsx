import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom';
import Result from '../types/Result';

interface Props {
    result: Result
}

export default function ResultListItem(props: Props): ReactElement {
    const result = props.result;
    return (
        <Link to={`/movie/${result.id}`}>
            <div className="ResultListItem col-sm-6 col-md-4 g-px-10 g-mb-30">
                <article className="u-block-hover">
                    <div className="g-bg-cover g-bg-white-gradient-opacity-v1--after">
                        <img className="d-flex align-items-end u-block-hover__main--mover-down" src={result.backdrop_path} alt="Image Description" />
                    </div>

                    <h1>{result.title}</h1>

                </article>
            </div>
        </Link >
    )
}
