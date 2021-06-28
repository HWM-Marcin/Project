import React, { ReactElement } from 'react'
import useMovieApi from '../../hooks/useMovieApi';
import Certification from '../../types/Certification';
import Certifications from '../../types/Certifications';

interface Props {
    type: number | undefined
}


export default function MovieCertificationItem(props: Props): ReactElement | null {

    const [certificationList, setcertificationList] = useMovieApi<Certifications>("get", `/certification/movie/list`);

    if (!certificationList || !certificationList.certifications.DE) return null;

    const filtered = certificationList.certifications.DE.filter(e => e.order === props.type)

    return (
        <>
            ab {filtered.map(e => e.certification)}
        </>
    )
}