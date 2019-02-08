import * as React from 'react'
import { Route } from 'react-router-dom'

import ContactComponent from './pages/Contact'
import HomeComponent from './pages/Home'
import ProjectsComponent from './pages/Projects'
import SkillsComponent from './pages/Skills'

interface OwnProps {}
interface OwnState {}

class MainComponent extends React.Component<OwnProps, OwnState> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <main>
                <div className='container'>
                    <div className='view'>
                        <Route exact path='/contact' component={ContactComponent} />
                        <Route exact path='/' component={HomeComponent} />
                        <Route exact path='/projects' component={ProjectsComponent} />
                        <Route exact path='/skills' component={SkillsComponent} />
                    </div>
                </div>
            </main>
        )
    }
}

export default MainComponent
