import * as React from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'

interface NavProps {
    page: string
}

class NavBar extends React.Component<RouteComponentProps<{}>> {
    render() {
        const page = this.props.location.pathname.substr(1)
        return (
            <header>
                <div className='container'>
                    <Nav page={page} />
                </div>
            </header>
        )
    }
}

function MobileMenu({ page }: NavProps) {
    return (
        <div className='mobile-menu'>
            <div className='mobile-menu-close'>
                <a href='javascript: void(0)'>&times;</a>
            </div>
            <nav>
                <ul className='nav nav-mobile'>
                    <li className={page === '' ? 'active' : ''}>
                        <Link to='/'>About</Link>
                    </li>

                    <li className={page === 'skills' ? 'active' : ''}>
                        <Link to='/'>Skills</Link>
                    </li>

                    <li className={page === 'projects' ? 'active' : ''}>
                        <Link to='/projects'>Projects</Link>
                    </li>
                    <li className={page === 'contact' ? 'active' : ''}>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

function Nav({ page }: NavProps) {
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

                <li className={'icon-nav ' + (page === '' ? 'active' : '')}>
                    <Link to='/' aria-label='Home'>
                        <i className='fa fa-home' />
                    </Link>
                </li>

                <li className={page === 'skills' ? 'active' : ''}>
                    <Link to='/skills'>Skills</Link>
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

export default withRouter(NavBar)
