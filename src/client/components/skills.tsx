import * as React from 'react'

interface ISkillJson {
    sections: Array<ISkill>
}

import * as skillsRaw from '../skills.json'
const skillData = (skillsRaw as any) as ISkillJson

interface ISkillSectionProps extends ISkill {
    isLast: boolean
}

function SkillSection(props: ISkillSectionProps) {
    const className = 'mtop ' + (props.isLast ? '' : 'barbottom')
    const tags = props.tags.map((tag, i) => (
        <span className='tag' key={'tag-' + i}>{ tag }</span>
    ))
    const paras = props.description.map((para, i) => (
        <p className={'small ' + (i === 0 && 'mtophalf')} key={'para-' + i}>
            { para }
        </p>
    ))

    return (
        <div className={className}>
            <div className='headergroup'>
                <h2>{ props.name }</h2>
                { tags }
                { paras }
            </div>
        </div>
    )
}

export default function Skills() {
    const { sections } = skillData

    return <section className="panel" id="me">
        <h1 className="barbottom">Skills &amp; Qualifications</h1>

        { sections.map((section, i) => <SkillSection isLast={i === sections.length - 1} key={'section-' + section.name} {...section} />)}
    </section>
}