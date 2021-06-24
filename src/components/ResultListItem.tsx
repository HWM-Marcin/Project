import React, { ReactElement } from 'react'
import Result from '../types/Result';

interface Props {
    result: Result
}

export default function ResultListItem(props: Props): ReactElement {
    const result = props.result;
    return (
        <div className="ResultListItem">
            <h1>{result.title}</h1>
        </div>
    )
}
