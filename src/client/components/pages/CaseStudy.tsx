import * as React from 'react'

import * as marked from 'marked'

interface OwnProps {
    project: config.Project
}

interface OwnState {
    section: number
}

class CaseStudyComponent extends React.Component<OwnProps, OwnState> {
    readonly state: OwnState = {
        section: 0
    }

    render () {
        const { caseStudy } = this.props.project
        const selectedSection = this.state.section || 0

        const sections = caseStudy.map(section => section[0])
        const sectionTags = sections.map((title, i) => (
            <li className={i === selectedSection ? 'active' : ''} key={'crumb' + i}>
                <a href='#' onClick={e => this.onSectionClicked(i, e)}>{title}</a>
            </li>
        ))

        const content = marked.parse(caseStudy[selectedSection].slice(1).join('\r\n'))

        return (
            <div className='case-study-body'>
                <h4 className='case-study-title'>{this.props.project.name}</h4>
                <ul className='breadcrumb'>
                    {sectionTags}
                </ul>
                <div className='case-study-content' dangerouslySetInnerHTML={{ __html: content }}>
                </div>
            </div>
        )
    }

    private onSectionClicked = (i: number, event: React.MouseEvent) => {
        this.setState({ section: i })
        event.preventDefault()
    }
}

export default CaseStudyComponent