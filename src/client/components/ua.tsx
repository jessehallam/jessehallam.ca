import axios from 'axios'
import * as React from 'react'
import { withRouter, RouteComponentProps } from 'react-router'

const tracking = {
    pageview(path: string) {
        axios.post('/_api/ua', { pageview: path })
    }
}

class UAComponent extends React.Component<RouteComponentProps<{}>> {
    componentDidMount() {
        this.props.history.listen((location, action) => {
            console.log('location =', location)
            console.log('action =', action)
            tracking.pageview(location.pathname)
        })
        tracking.pageview(this.props.location.pathname)
    }

    render() {
        return (
            <div />
        )
    }
}

export default withRouter(UAComponent)