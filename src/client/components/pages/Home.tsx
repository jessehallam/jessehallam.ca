import * as React from 'react'

const config: config.HomeConfig = require('../../config/home.json')

interface OwnProps {}
interface OwnState {}

export default class HomeComponent extends React.Component<OwnProps, OwnState> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className='panel' id='me'>
                <h1>Jesse Colin Hallam</h1>
                <h2 className='light'>
                    Full-Stack Web Developer Based in Toronto, Canada
                </h2>
                <Resume />
                <p className='bartop barbottom'>{config.summary}</p>
                <InfoPanel />
            </section>
        )
    }
}

function InfoPanel() {
    const infoNodes = config.info.map(node => (
        <li key={node.name}>
            <dl>
                <dt>{node.name}:</dt>
                <dd>
                    {node.href && <a href={node.href}>{node.value}</a>}
                    {!node.href && node.value}
                </dd>
            </dl>
        </li>
    ))
    const socialNodes = config.social.map(node => (
        <a
            href={node.href}
            key={node.title}
            target='_blank'
            data-toggle='tooltip'
            data-placement='top'
            title={node.title}
        >
            <span className='fa-stack'>
                <i className='fa fa-circle fa-stack-2x' />
                <i className={'fa fa-stack-1x fa-inverse ' + node.icon} />
            </span>
        </a>
    ))
    return (
        <div className='container-fluid info'>
            <ul className='info-panels'>
                {infoNodes}
                <li>
                    <dl className='social'>
                        <dt>Find me at:</dt>
                        <dd>{socialNodes}</dd>
                    </dl>
                </li>
            </ul>
        </div>
    )
}

function Resume() {
    return (
        <a className='resume' href={config.resume} target='_blank'>
            <span>
                <i className='fa fa-file-text' />
                <span className='hide-medium' style={{ paddingRight: 0 }}>
                    Download My&nbsp;
                </span>
                Résumé
            </span>
        </a>
    )
}
