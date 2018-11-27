import * as React from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'

class NavBar extends React.Component<RouteComponentProps<{}>> {
    render() {
        const page = this.props.location.pathname.substr(1)
        return (
            <nav>
                <ul className='nav nav-primary'>
                    <li className='icon-nav mobile-nav'>
                        <a
                            className='btn btn-sm'
                            href='javascript: void(0)'
                            id='mobile-menu-button'
                        >
                            <i className='fa fa-bars' />
                        </a>

                        <MobileMenu page={page} />
                    </li>

                    <li className={'icon-nav' + (page === '' ? 'active' : '')}>
                        <Link to='/' aria-label='Home'>
                            <i className='fa fa-home' />
                        </Link>
                    </li>

                    <li className={page === 'skills' ? 'active' : ''}>
                        <a href='/'>Skills</a>
                    </li>

                    <li className={page === 'projects' ? 'active' : ''}>
                        <Link to='/projects'>Projects</Link>
                    </li>

                    <li className={page === 'contact' ? 'active' : ''}>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

function MobileMenu(props: { page: string }) {
    return (
        <div className='mobile-menu'>
            <div className='mobile-menu-close'>
                <a href='javascript: void(0)'>&times;</a>
            </div>
            <nav>
                <ul className='nav nav-mobile'>
                    <li className={props.page === '' ? 'active' : ''}>
                        <Link to='/'>About</Link>
                    </li>

                    <li className={props.page === 'skills' ? 'active' : ''}>
                        <Link to='/'>Skills</Link>
                    </li>

                    <li className={props.page === 'projects' ? 'active' : ''}>
                        <Link to='/projects'>Projects</Link>
                    </li>
                    <li className={props.page === 'contact' ? 'active' : ''}>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default withRouter(NavBar)
