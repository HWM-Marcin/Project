import React, { ReactElement } from 'react'
import useMovieApi from '../../hooks/useMovieApi';
import { useStore } from '../../Store';
import Certifications from '../../types/Certifications';
import ReleaseDates from '../../types/ReleaseDates';
import "./MovieCertification.scss";
import ReactTooltip from "react-tooltip";

interface Props {
    movieId: number,
    className?: string
}


export default function MovieCertification(props: Props): ReactElement | null {


    const { dispatch, store } = useStore();
    const choosenLanguage = store.pageConfig.certificationArea;
    const [releaseDates, setReleaseDates] = useMovieApi<ReleaseDates>("get", `movie/${props.movieId}/release_dates`);
    const [certificationList, setcertificationList] = useMovieApi<Certifications>("get", `/certification/movie/list`);

    if (!releaseDates || !releaseDates.results) return null;

    const certificationTypes = releaseDates.results.filter(e => e.iso_3166_1 === choosenLanguage);

    if (certificationTypes.length === 0) return null;

    const movieCertificationType = releaseDates.results.filter((e) => e.iso_3166_1 === choosenLanguage)[0].release_dates[0].type;

    if (!certificationList) return null;

    const movieCertifications = certificationList.certifications.DE?.filter(e => e.order === movieCertificationType)

    if (!movieCertifications || !movieCertifications[0]) return null;

    return (
        <div className={`MovieCertification ${props.className ? props.className : ''}`} data-tip={movieCertifications[0].meaning}>
            <span className="btn u-btn-outline-black rounded">FSK {movieCertifications[0].certification}
                <ReactTooltip effect="solid" place="bottom" /></span>
        </div>

    )
}

/* <span className="MovieCertification ml-auto" data-tip={movieCertifications[0].meaning}>
            FSK {movieCertifications[0].certification}
            <ReactTooltip effect="solid" place="bottom" />
        </span> */