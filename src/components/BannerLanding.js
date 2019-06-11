import React from 'react'

const getDisplay = (prefix) => {
  switch (prefix) {
    case "ALL":
      return "メンバー"
    case "moja":
      return "もじゃ"
    case "carton":
      return "カートン"
    case "gasu":
      return "ガースー"
    case "sharibou":
      return "しゃり坊"
    default:
      return ""
  }
}

const BannerLanding = (props) => (
    <section id="banner" className="style2">
        <div className="inner">
            <header className="major">
                <h1>{props.title} Logs</h1>
            </header>
            <div className="content">
                <p>{getDisplay(props.prefix)}の日々の惰性を書き殴ったもの</p>
            </div>
        </div>
    </section>
)

export default BannerLanding
