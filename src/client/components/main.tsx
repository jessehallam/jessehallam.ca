import * as React from 'react'
import { Route } from 'react-router-dom'

import HomeComponent from './pages/Home'

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
                        <Route exact path='/contact' component={null} />
                        <Route exact path='/' component={HomeComponent} />
                        <Route exact path='/projects' component={null} />
                        <Route exact path='/skills' component={null} />
                    </div>
                </div>
            </main>
        )
    }
}

export default MainComponent
