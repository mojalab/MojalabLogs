import React from 'react'
import { getDisplayTitle, getDisplayAuthor } from '../utils'

const BannerLanding = (props) => (
    <section id="banner" className="style2">
        <div className="inner">
            <header className="major">
                <h1>{getDisplayTitle(props.prefix)} Logs</h1>
            </header>
            <div className="content">
                <p>{getDisplayAuthor(props.prefix)}の日々の惰性を書き殴ったもの</p>
            </div>
        </div>
    </section>
)

export default BannerLanding
