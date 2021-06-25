import React, { ReactElement } from 'react'
import useMovieApi from '../../hooks/useMovieApi';
import { useStore } from '../../Store';
import Certifications from '../../types/Certifications';
import ReleaseDates from '../../types/ReleaseDates';
import "./MovieCertification.scss";
import ReactTooltip from "react-tooltip";

interface Props {
    movieId: number
}

export default function MovieCertification(props: Props): ReactElement | null {

    const { dispatch, store } = useStore()
    const [releaseDates, setReleaseDates] = useMovieApi<ReleaseDates>("get", `movie/${props.movieId}/release_dates`);
    const [certificationList, setcertificationList] = useMovieApi<Certifications>("get", `/certification/movie/list`);

    if (!releaseDates) {
        return null
    }

    const certificationType = releaseDates.results.filter((e) => e.iso_3166_1 === store.pageConfig.certificationArea)[0].release_dates[0].type;

    if (!certificationList) {
        return null
    }

    const movieCertification = certificationList.certifications.DE?.filter(e => e.order === certificationType)

    if (!movieCertification) {
        return null
    }

    return (
        <span className="MovieCertification" data-tip={movieCertification[0].meaning}>
            {movieCertification[0].certification}
            <ReactTooltip effect="solid" place="bottom" />
        </span>
    )
}
