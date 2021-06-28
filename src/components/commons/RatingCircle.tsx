import React, { ReactElement } from 'react'
import "./RatingCircle.scss"

interface Props {
    voteAverage: number,
    voteCount: number
}

export default function RatingCircle(props: Props): ReactElement {

    const voteAverage = props.voteAverage * 10

    return (
        <div className="RatingCircle">
            <div className={`c100 p${voteAverage} small orange`}>
                <span>{voteAverage}%</span>
                <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                </div>
            </div>
        </div>
    )
}
