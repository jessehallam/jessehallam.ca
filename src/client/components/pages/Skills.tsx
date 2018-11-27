import * as React from 'react'

import * as marked from 'marked'

const config: config.SkillsConfig = require('../../config/skills.json')

interface OwnProps {}
interface OwnState {}

class SkillsComponent extends React.Component<OwnProps, OwnState> {
    constructor(props) {
        super(props)
    }

    render() {
        const sections = config.sections.map((section, i) => (
            <SkillSection
                last={i === config.sections.length - 1}
                section={section}
            />
        ))
        return (
            <section className='panel' id='me'>
                <h1 className='barbottom'>Skills &amp; Qualifications</h1>
                {sections}
            </section>
        )
    }
}

function SkillSection(props: { last: boolean; section: config.SkillSection }) {
    const { last, section } = props
    const content = section.description.join('\n')
    const markup = { __html: marked.parse(content) }
    const tags = section.tags.map((tag, i) => (
        <span className='tag' key={i}>
            {tag}
        </span>
    ))
    return (
        <div className={last ? 'barbottom' : ''}>
            <div className='headergroup'>
                <h2>{section.name}</h2>
                {tags}
                <div className='mtophalf' dangerouslySetInnerHTML={markup} />
            </div>
        </div>
    )
}

export default SkillsComponent
