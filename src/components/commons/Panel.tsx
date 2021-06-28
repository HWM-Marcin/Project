import React, { ReactChild, ReactElement } from 'react'
import "./Panel.scss"

interface Props {
    children?: ReactChild | ReactChild[]
    className?: string
}

export default function Panel(props: Props): ReactElement {
    return (
        <div className={`Panel ${props.className}`}>
            {props.children}
        </div>
    )
}
