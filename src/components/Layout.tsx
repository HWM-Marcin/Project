import React, { ReactChildren, ReactElement } from 'react'

interface Props {
    children: ReactElement
}

export default function Layout(props: Props): ReactElement {
    return (
        <div className="Layout">
            {props.children}
        </div>
    )
}
