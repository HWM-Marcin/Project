import React, { ReactChild, ReactElement } from 'react'
import "./Panel.scss"

interface Props {
    children?: ReactChild | ReactChild[]
}

export default function Panel(props: Props): ReactElement {
    return (
        <div className="Panel">
            {props.children}
        </div>
    )
}
