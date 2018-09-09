import * as React from 'react'
import Carousel from './util/carousel'

export default function Projects() {
    return <section className="panel" id="me">
        <h1 className="barbottom">Projects</h1>

        <ul className="projects">
            <li>
                <div className="proj-details">
                    <div className="content">
                        <h2>Reddit Ranked Flairs</h2>

                        <ul className="tags">
                            <li>C#</li>
                            <li>ASP.NET MVC</li>
                            <li>Entity Framework</li>
                            <li>OAuth 2.0</li>
                            <li>AngularJS</li>
                            <li>Microsoft Azure</li>
                        </ul>

                        <p className="small">
                            Reddit Ranked Flairs is a website which automatically handles the administration of "badges" for a community of players in the astonishigly popular online strategy game League of Legends.
                        </p>
                        <p className="small">
                            Players who visit my website are permitted to sign in using their Reddit accounts. Once their signed in, they can register to own a unique name inside the League of Legends universe.
                        </p>
                        <p className="small">
                            After registering, users will have their in-game achievements shown for all to see on Reddit.
                        </p>
                        <dl>
                            <dt>Website:</dt>
                            <dd><a href="http://league-flairs.site/">http://league-flairs.site</a></dd>

                            <dt>GitHub:</dt>
                            <dd><a href="https://github.com/jessehallam/RedditRankedFlairs/tree/Production">https://github.com/jessehallam/RedditRankedFlairs/</a></dd>
                        </dl>
                    </div>
                </div>
                <div className="proj-image">
                    <Carousel>
                        <div className="owl-carousel owl-theme">
                            <div className="item">
                                <img alt="Reddit flairs thumbnail" src="/www-static/project/flair/flairs_image2.png"/>
                            </div>
                            <div className="item">
                                <img alt="Reddit flairs thumbnail" src="/www-static/project/flair/flairs_image1.png"/>
                            </div>
                            <div className="item">
                                <img alt="Reddit flairs thumbnail" src="/www-static/project/flair/flairs_image3.png"/>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </li>
        </ul>
    </section>
}