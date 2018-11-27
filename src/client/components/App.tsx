import * as React from 'react'

import MainComponent from './Main'
import NavBar from './NavBar'

interface OwnProps { }
interface OwnState { }

export default class App extends React.Component<OwnProps, OwnState> {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <div>
                <NavBar />
                <div className='bg-underlay' />
                <MainComponent />
            </div>
        )
    }
}