import * as React from 'react'
import { Route } from 'react-router-dom'

import Contact from './contact'
import Home from './home'
import Projects from './projects'
import Skills from './skills'

export default function Main() {
    return <main>
        <div className='container'>
            <div className='view'>
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/' component={Home} />
                <Route exact path='/projects' component={Projects} />
                <Route exact path='/skills' component={Skills} />
            </div>
        </div>
    </main>
}