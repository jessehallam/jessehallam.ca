import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as ReactRouterDOM from 'react-router-dom'

import Header from './components/header'
import MainControl from './components/main'

import 'noty/lib/noty.css'
import 'noty/lib/themes/mint.css'

function App() {
    return <div>
        <Header />
        <div className='bg-underlay'></div>
        <MainControl />
    </div>
}

ReactDOM.render(
    <ReactRouterDOM.BrowserRouter>
        <App />
    </ReactRouterDOM.BrowserRouter>,
    document.getElementById('app')
)