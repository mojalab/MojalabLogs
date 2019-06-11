import React from 'react'
import { Link } from 'gatsby'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Mojalab Logs</h1>
            </header>
            <div className="content">
                <p>もじゃラボメンバーの活動報告</p>
                <ul className="actions">
                    <Link to="/logs" className="button next scrolly">Go to Logs</Link>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
