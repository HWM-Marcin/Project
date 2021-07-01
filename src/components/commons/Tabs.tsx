import React, { ReactElement } from 'react'
import Panel from './Panel'

interface Props {
    children: ReactElement[],
    label: string[]
}

export default function Tabs(props: Props): ReactElement {
    return (
        <div className="Tabs">
            <ul className="nav nav-pills mb-3" role="tablist">
                {props.children.map((child, index) =>
                    <li key={index} className="nav-item" role="presentation">
                        <a className={`nav-link ${index === 0 ? 'active' : ''}`} id={`"pills-${index}-tab"`} data-toggle="pill" href={`#pills-${index}`} role="tab" aria-controls={`pills-${index}`} aria-selected={index === 0}>{props.label[index]}</a>
                    </li>
                )}
            </ul>
            <div className="tab-content" id="pills-tabContent">
                {props.children.map((child, index) =>

                    <div key={index}
                        className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
                        id={`pills-${index}`}
                        role="tabpanel"
                        aria-labelledby={`pills-${index}-tab`}>
                        <Panel className="g-pa-30 g-pb-10 g-mb-30">{child.props.children}</Panel>
                    </div>

                )}
            </div>
        </div>
    )
}