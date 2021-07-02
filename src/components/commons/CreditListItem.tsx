import React, { ReactElement } from 'react'
import Credit from '../../types/Credit'
import LoadImage from '../helper/LoadImage';
import defaultImg from "../../assets/img/default/person_2-3.svg";
import { Link } from 'react-router-dom';


interface Props {
    credit: Credit,
    className?: string
}

export default function CreditListItem(props: Props): ReactElement {

    const credit = props.credit;

    return (

        <div className={`CreditListItem ${props.className}`}>
            <article>
                <Link to={`/person/${credit.id}`}>
                    <LoadImage url={credit.profile_path} size={'h632'} className="rounded" ratio="aspect-ratio-2-3" />
                </Link>
                <h4 className="h6 g-color-black mt-2">
                    <Link className="u-link-v5 g-color-black g-color-primary--hover" to={`/person/${credit.id}`}>{credit.name}</Link>
                </h4>
            </article>
        </div>
    )
}
