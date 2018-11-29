import * as React from 'react'

import * as marked from 'marked'
import Carousel from '../util/carousel'

interface OwnProps {
    displaySeparator: boolean
    project: config.Project
}
interface OwnState {}

export default class Project extends React.Component<OwnProps, OwnState> {
    constructor(props) {
        super(props)
    }

    render() {
        const props = this.props
        const project = this.props.project

        const description = {
            __html: marked.parse(project.description.join('\n'))
        }
        const tags = project.tags.map((tag, i) => <li key={i}>{tag}</li>)

        return (
            <li className={props.displaySeparator ? 'bartop' : ''}>
                <div className='proj-details'>
                    <div className='content'>
                        <h2>{project.name}</h2>
                        <ul className='tags'>{tags}</ul>
                        <div dangerouslySetInnerHTML={description} />
                        <ProjectMeta meta={project.meta} />
                    </div>
                </div>
                <ProjectCarousel slides={project.carousel.slides} />
            </li>
        )
    }
}

function ProjectCarousel({ slides }: { slides: config.CarouselSlide[] }) {
    return (
        <div className='proj-image'>
            <Carousel slides={slides.map(s => s.src)} />
        </div>
    )
}

function ProjectMeta(props: { meta: config.ProjectMeta }) {
    const { meta } = props
    const items = Object.keys(meta).reduce(
        (elements, key, i) => {
            const val = meta[key]
            elements.push(<dt key={'dt' + i}>{key}</dt>)
            elements.push(
                <dd key={'dd' + i}>
                    <a href={val.href} target='_blank'>
                        {val.text}
                    </a>
                </dd>
            )
            return elements
        },
        [] as JSX.Element[]
    )
    return <dl>{items}</dl>
}
