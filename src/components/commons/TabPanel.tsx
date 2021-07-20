import React, { ReactElement } from 'react'

interface TabPanel {
    children: ReactElement[]
}

export function TabPanel(props: TabPanel): ReactElement {
    return (
        <div className="TabPanel">
            <ul className="nav nav-pills mb-3" role="tablist">
                {props.children.map((nav, index) =>
                    <li key={index} className="nav-item" role="presentation">
                        <a className={`nav-link ${index === 0 ? 'active' : ''}`} id={`"pills-${index}-tab"`} data-toggle="pill" href={`#pills-${index}`} role="tab" aria-controls={`pills-${index}`} aria-selected={index === 0}>
                            {nav.props.label}
                        </a>
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
                        {child.props.children}
                    </div>
                )}
            </div>
        </div>
    )
}

interface Tab {
    children: ReactElement | ReactElement[],
    label: string
}

export function Tab(props: Tab): ReactElement {
    return (
        <div className="TabPanel">
            <p>{props.label}</p>
            {props.children}
        </div>
    )
}
