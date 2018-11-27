import * as React from 'react'

import Project from './Project'

const config: config.Project[] = require('../../config/projects.json')

interface OwnProps {}
interface OwnState {}

class ProjectsComponent extends React.Component<OwnProps, OwnState> {
    constructor(props) {
        super(props)
    }

    render() {
        const projects = config.map((project, i) => (
            <Project displaySeparator={i > 0} key={i} project={project} />
        ))
        return (
            <section className='panel' id='me'>
                <h1 className='barbottom'>Projects</h1>
                <ul className='projects'>{projects}</ul>
            </section>
        )
    }
}

export default ProjectsComponent
