import * as React from 'react'

export default function Skills() {
    return <section className="panel" id="me">
        <h1 className="barbottom">Skills &amp; Qualifications</h1>

        <div className="mtop">
            <div className="headergroup">
                <h2>.NET Framework 4.6</h2>
                <span className="tag">C#</span>
                <span className="tag">ASP.NET MVC</span>
                <span className="tag">Entity Framework</span>
            </div>
            <p className="mtophalf small">
                With more than ten years of experience in the .NET Framework, I have developed a proficiency in the MVC software pattern, Inversion of Control (IOC), N-Tier applications and Data-Driven Design. I'm knowledgeable with the ASP.NET internals including both the ASP.NET and OWIN pipelines, custom view engines, and IIS server configuration.
            </p>
            <p className="barbottom small">
                I am also proficient with Microsoft desktop tools including Visual Studio, Team Foundation Server, SQL Server Management Studio, VS Code, Blend, and more.
            </p>
        </div>

        <div className="mtop">
            <div className="headergroup">
                <h2>Front-End Web Development</h2>
                <span className="tag">HTML 5</span>
                <span className="tag">CSS 3</span>
                <span className="tag">SASS</span>
                <span className="tag">JavaScript</span>
                <span className="tag">Angular</span>
                <span className="tag">React</span>
                <span className="tag">Vue.js</span>
                <span className="tag">Webpack</span>
            </div>
            <p className="mtophalf small">
                In 2018, the front-end ecosystem is rapidly changing and I have worked hard to remain up to date. I am confident that my expertise in HTML 5, CSS 3 and high-quality JavaScript frameworks will be an asset to your business.
            </p>
            <p className="small barbottom">
                I currently develop mainly in Vue.js with a Webpack build system, although I also have experience using Angular and React to create responsive single-paged applications with an emphasis on declarative design, reusable components and testable code.
            </p>
        </div>

        <div className="mtop">
            <div className="headergroup">
                <h2>Data Management</h2>
                <span className="tag">MySQL</span>
                <span className="tag">SQL Server</span>
                <span className="tag">ANSI SQL / T-SQL</span>
                <span className="tag">MongoDB</span>
            </div>
            <p className="mtophalf small">
                I possess intermediate knowledge of SQL.
                My expertise includes the installation and preparation of MySQL and Microsoft SQL Server including access control.
                Although most of my application work is done using an ORM (such as Entity Framework), I'm comfortable writing and debugging complex SQL statements, including the use of JOINs, PRIMARY KEYs, FOREIGN KEYs, and INDEXes.
            </p>
            <p className="small barbottom">
                I also possess knowledge working with NoSQL databases - mainly MongoDB - including the aggregation pipeline, deploying sharded clusters, and replica sets.
            </p>
        </div>

        <div className="mtop">
            <div className="headergroup">
                <h2>IT / Dev Ops</h2>
                <span className="tag">Amazon AWS</span>
                <span className="tag">Microsoft Azure</span>
                <span className="tag">Linux Enterprise Server</span>
            </div>
            <p className="mtophalf small">
                I'm excited about cloud computing and have used both Microsoft Azure and Amazon Web Services (AWS) to deploy the full application stack including code deployment, database deployment and integration testing.
            </p>
            <p className="small">
                My Operations knowledge includes firewall tuning, installing and configuring software on Linux servers, and DNS configuration.
            </p>
        </div>
    </section>
}