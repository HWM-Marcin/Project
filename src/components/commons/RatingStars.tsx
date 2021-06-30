import React, { ReactElement } from 'react'
import starFull from "../../assets/img/icons/star-full.svg";
import starHalf from "../../assets/img/icons/star-half.svg";

interface Props {
    rating: number,
    className?: string
}

export default function RatingStars(props: Props): ReactElement {

    const rating = props.rating / 2
    const ratingRounded = Math.round(rating * 2) / 2;

    const fullStars = Math.floor(ratingRounded / 1)
    const halfStars = Math.round(ratingRounded % 1)

    const arr = []

    for (let i = 0; i < fullStars; i++) {
        arr.push('full')
    }

    for (let i = 0; i < halfStars; i++) {
        arr.push('half')
    }

    return (
        <span className={`RatingStars ${props.className ? props.className : ''}`}>
            {arr.map((e, i) => {
                return (
                    <React.Fragment key={i}>
                        {e === 'full'
                            ? <img src={starFull} height="15" />
                            : <img src={starHalf} height="15" />
                        }
                    </React.Fragment>
                )
            })}
        </span>
    )
}
