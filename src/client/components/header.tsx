import * as React from 'react'

export default function Header() {
    return <header>
        <div className='container'>
            <nav>
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
                                    <li>
                                        <a href="/">About</a>
                                    </li>
                                    <li>
                                        <a href="/skills">Skills</a>
                                    </li>
                                    <li>
                                        <a href="/projects">Projects</a>
                                    </li>
                                    <li>
                                        <a href="/contact">Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </li>

                    <li className="icon-nav">
                        <a href="/">
                            <i className="fa fa-home"></i>
                        </a>
                    </li>

                    <li>
                        <a href="/skills">
                            Skills
                        </a>
                    </li>

                    <li>
                        <a href="/projects">
                            Projects
                        </a>
                    </li>

                    <li>
                        <a href="/contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
}