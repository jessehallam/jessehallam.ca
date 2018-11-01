import * as React from 'react'
import Carousel from './util/carousel'

import * as projectData from '../projects.json'

function Project(props: IProject & {displaySeparator: boolean}) {
    let description: JSX.Element | JSX.Element[]
    let meta: JSX.Element[] = []

    if (Array.isArray(props.description))
        description = props.description.map((p, i) => <p key={i}>{ p }</p>)
    else
        description = <p>{ props.description }</p>

    meta = Object.keys(props.meta).reduce(
        (elements, key, i) => {
            const value = props.meta[key]
            elements.push(<dt key={'dt-' + i}>{ key }</dt>)
            elements.push(<dd key={'dd-' + i}>
                <a href={value.href} target='_blank'>{ value.text }</a>
            </dd>)
            return elements
        },
        meta
    )

    return (
        <li className={props.displaySeparator ? 'bartop' : ''}>
            <div className='proj-details' key={props.name}>
                <div className='content'>
                    <h2>{ props.name }</h2>

                    <ul className='tags'>
                        { props.tags.map((tag, i) => <li key={i}>{ tag }</li>) }
                    </ul>

                    { description }

                    <dl>{ meta }</dl>
                </div>
            </div>
            <div className='proj-image'>
                <Carousel>
                    <div className='owl-carousel owl-theme'>
                        {
                            props.carousel.slides.map((slide, i) => (
                                <div className='item' key={i}>
                                    <img alt='' src={slide.src} />
                                </div>
                            ))
                        }
                    </div>
                </Carousel>
            </div>
        </li>
    )
}

export default function Projects() {
    const projects = (projectData as any) as IProjectData;
    return <section className="panel" id="me">
        <h1 className="barbottom">Projects</h1>

        <ul className='projects'>
            { projects.map((project, i) => <Project key={'project-' + i} displaySeparator={i > 0} {...project} />) }
        </ul>
    </section>
}