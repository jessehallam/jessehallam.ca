import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as ReactRouterDOM from 'react-router-dom'

// Import Vendor CSS:
import 'noty/lib/noty.css'
import 'noty/lib/themes/mint.css'

// Import Components:
import { withAnalytics } from './components/Analytics'
import App from './components/App'

const AppComponent = withAnalytics(App)

// Mount React:
ReactDOM.render(
    <ReactRouterDOM.BrowserRouter>
        <AppComponent />
    </ReactRouterDOM.BrowserRouter>,
    document.getElementById('app')
)