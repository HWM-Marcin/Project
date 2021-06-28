import React, { ReactElement } from 'react'
import Movie from '../../types/Movie'

interface Props {
    movie: Movie
}

export default function GenreList(props: Props): ReactElement {

    const movie = props.movie

    return (
        <ul className="list-inline">
            {movie.genres.map((genre, index) => {
                return (
                    <React.Fragment key={genre.id}>
                        <li className="list-inline-item g-mx-4">
                            <a className="g-color-text g-color-primary--hover g-font-weight-400 g-text-underline--none--hover" href="">{genre.name}</a>
                        </li>
                        {
                            movie.genres.length !== index + 1
                                ? <li className="list-inline-item g-color-gray-light-v3 g-mx-4">|</li>
                                : ''
                        }
                    </React.Fragment>
                )
            }
            )}
            <li className="list-inline-item g-color-text g-ml-10">
                <i className="icon-communication-131 u-line-icon-pro"></i> {movie.runtime}m
            </li>
        </ul>
    )
}
