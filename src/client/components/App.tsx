import * as React from 'react'

import MainComponent from './main'
import NavBar from './NavBar'

import Modal from './util/modal'
import Subject from './util/subject'

interface OwnProps {}
interface OwnState {
    modalRender?: () => JSX.Element
}

export const clearModalRenderer = new Subject<void>()
export const setModalRenderer = new Subject<() => JSX.Element>()

export default class App extends React.Component<OwnProps, OwnState> {
    readonly state: OwnState = {
        modalRender: null
    }

    private readonly clearModalSubscription = clearModalRenderer.subscribe(
        () => {
            this.setState({ modalRender: null })
        }
    )

    private readonly setModalSubscription = setModalRenderer.subscribe(
        render => {
            this.setState({ modalRender: render })
        }
    )

    componentWillUnmount() {
        this.clearModalSubscription()
        this.setModalSubscription()
    }

    render() {
        const modal = this.state.modalRender && (
            <Modal closed={() => clearModalRenderer.next()} render={this.state.modalRender} />
        )
        return (
            <div>
                <NavBar />
                <div className='bg-underlay' />
                <MainComponent />
                {modal}
            </div>
        )
    }
}
