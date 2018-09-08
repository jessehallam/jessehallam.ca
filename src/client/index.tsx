import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Header from './components/header'
import MainControl from './components/main'

function App() {
    return <div>
        <Header />
        <div className='bg-underlay'></div>
        <MainControl />
    </div>
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)