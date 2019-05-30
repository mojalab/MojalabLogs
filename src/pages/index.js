import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/moja.png'
import pic02 from '../assets/images/carton.png'
import pic03 from '../assets/images/gasu.png'
import pic04 from '../assets/images/sharibou.png'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Mojalab Logs"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one">
                        <div className="inner">
                            <header className="major">
                                <h2>もじゃラボ動画</h2>
                            </header>
                            <p>もじゃと愉快な仲間たちが、自己満の範疇で趣味に体当たりする、言わばホームビデオチャンネル</p>
                            <ul className="actions">
                                <li>
                                    <a
                                      href="https://www.youtube.com/channel/UC-2ix-zaKTWrCxmTZZDjB0Q?view_as=subscriber"
                                      className="button next"
                                      target="_blank">
                                        youtube channel
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section id="two" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Moja's Logs</h3>
                                <p>もじゃのブログ</p>
                            </header>
                            <Link to="/logs" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Carton's Logs</h3>
                                <p>カートンのブログ</p>
                            </header>
                            <Link to="/logs" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Gasu's Logs</h3>
                                <p>ガースーのブログ</p>
                            </header>
                            <Link to="/logs" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Sharibou's Logs</h3>
                                <p>しゃり坊のブログ</p>
                            </header>
                            <Link to="/logs" className="link primary"></Link>
                        </article>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex
