import axios from 'axios'

import * as React from 'react'
import * as ReactRouterDOM from 'react-router-dom'

const pageview = (path: string) => axios.post('/_api/ua', { pageview: path })

export function withAnalytics<TProps>(
    ComponentType: React.ComponentClass<TProps> | React.StatelessComponent<TProps>
) {
    class WrappedComponent extends React.Component<ReactRouterDOM.RouteComponentProps<TProps>> {
        private isAttached: boolean = false

        componentDidMount() {
            if (this.isAttached) return
            this.props.history.listen((location, action) => {
                console.log('Tracking:', location, action)
                pageview(location.pathname)
            })
            this.isAttached = true
        }

        render() {
            return <ComponentType {...this.props} />
        }
    }

    return ReactRouterDOM.withRouter(WrappedComponent)
}
