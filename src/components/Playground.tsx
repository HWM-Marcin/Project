/* import React, { ReactElement } from 'react'


interface Props {
    modules: Module[]
}

interface Module {
    item: string | string[]
}

const config = {
    modules: [
        { item: 'col-md-12 ' }
    ]
}


export default function Playground(): ReactElement {
    return (
        <div>
            <Switcher modules={config} />
        </div>
    )
}

export function Switcher(props: Props): ReactElement | null {
    return (
        <div>
            {props.modules.map((module, index) =>
                <React.Fragment key={index}>
                    {module === 'Com1' ? <Com1 /> : null}
                    {module === 'Com2' ? <Com2 /> : null}
                    {module === 'Com3' ? <Com3 /> : null}
                </React.Fragment>
            )}
        </div>
    )
}

export function Com1(): ReactElement {
    return (
        <div>
            <p>Com1</p>
        </div>
    )
}

export function Com2(): ReactElement {
    return (
        <div>
            <p>Com2</p>
        </div>
    )
}

export function Com3(): ReactElement {
    return (
        <div>
            <p>Com3</p>
        </div>
    )
}
 */