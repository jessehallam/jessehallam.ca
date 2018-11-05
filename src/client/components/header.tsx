import * as React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { RouteProps } from 'react-router';

export default function Header() {
    const NavBarWithRouter = withRouter(NavBar)

    return <header>
        <div className='container'>
            <NavBarWithRouter />
        </div>
    </header>
}

interface NavBarProps extends RouteProps {}

function NavBar(props: NavBarProps) {
    const page = props.location.pathname.substr(1)
    
    return <nav>
        <ul className='nav nav-primary'>
            <li className='icon-nav mobile-nav'>
                <a href='javascript:void(0)' className='btn btn-sm' id='mobile-menu-button'>
                    <i className='fa fa-bars'></i>
                </a>

                <div className="mobile-menu">
                    <div className="mobile-menu-close">
                        <a href="javascript:void(0)">&times;</a>
                    </div>
                    <nav>
                        <ul className="nav nav-mobile">
                            <li className={page == '' ? 'active' : ''}>
                                <a href="/">About</a>
                            </li>
                            <li className={page == 'skills' ? 'active' : ''}>
                                <a href="/skills">Skills</a>
                            </li>
                            <li className={page == 'projects' ? 'active' : ''}>
                                <a href="/projects">Projects</a>
                            </li>
                            <li className={page == 'contact' ? 'active' : ''}>
                                <a href="/contact">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </li>

            <li className={'icon-nav ' + (page == '' ? 'active' : '')}>
                <Link to='/' aria-label='Home'><i className="fa fa-home"></i></Link>
            </li>

            <li className={page == 'skills' ? 'active' : ''}>
                <Link to='/skills'>Skills</Link>
            </li>

            <li className={page == 'projects' ? 'active' : ''}>
                <Link to='/projects'>Projects</Link>
            </li>

            <li className={page == 'contact' ? 'active' : ''}>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
    </nav>
}