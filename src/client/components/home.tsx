import * as React from 'react'

export default function Home() {
    return <section className="panel" id="me">
        <h1>Jesse Colin Hallam</h1>
        <h2 className="light">Full-Stack Web Developer Based in Toronto, Canada</h2>
        <a href="https://docs.google.com/document/d/1QF4zs0uLPV681m3xRVewt0QI_fCXxit0AExOXI0xQpI/edit?usp=sharing" target="_blank" className="resume">
            <span><i className="fa fa-file-text"></i><span className="hide-medium" style={{paddingRight: 0}}>Download My&nbsp;</span>Résumé</span>
        </a>
        <p className="bartop barbottom">
            With over a decade of experience working in web and desktop technologies, Jesse specializes in the Microsoft stack, including a proficiency with Microsoft Visual Studio, .NET Framework, and a focus on responsive web applications using Microsoft ASP.NET and modern front-end frameworks, including Angular, React, and Vue.js.
        </p>
        <div className="container-fluid info">
            <ul className="info-panels">
                <li>
                    <dl>
                        <dt>Location:</dt>
                        <dd>Toronto, ON</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>Email:</dt>
                        <dd><a href="mailto:contact@jessehallam.ca">contact@jessehallam.ca</a></dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>Phone:</dt>
                        <dd><a href="tel:343-333-0018">343 333-0018</a></dd>
                    </dl>
                </li>
                <li>
                    <dl className="social">
                        <dt>Find me at:</dt>
                        <dd>
                            <a href="https://github.com/jessehallam" target="_blank" data-toggle="tooltip" data-placement="top" title="GitHub">
                                <span className="fa-stack">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                            <a href="https://www.linkedin.com/in/jessehallam" target="_blank" data-toggle="tooltip" data-placement="top" title="LinkedIn">
                                <span className="fa-stack">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                            <a href="http://stackoverflow.com/users/56998/kivin" target="_blank" data-toggle="tooltip" data-placement="top" title="Stack Overflow">
                                <span className="fa-stack">
                                    <i className="fa fa-circle fa-stack-2x"></i>
                                    <i className="fa fa-stack-overflow fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </dd>
                    </dl>
                </li>
            </ul>
        </div>
    </section>
}