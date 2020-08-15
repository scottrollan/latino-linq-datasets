import React, { Component } from "react";

import SVG from "react-inlinesvg";
import styles from "./Header.module.css";

class Header extends Component {
  state = { showNav: false };

  renderLogo = (logo) => {
    if (!logo || !logo.asset) {
      return null;
    }

    if (logo.asset.extension === "svg") {
      return <SVG src={logo.asset.url} className={styles.logo} />;
    }

    return <img src={logo.asset.url} alt={logo.title} className={styles.logo} />;
  };

  render() {
    const { title = "Missing title", logo } = this.props;

    return (
      <div className={styles.root}>
        <h1 className={styles.branding}>
          <Link
            href={{
              pathname: "/LandingPage",
              query: {
                slug: "/",
              },
            }}
            as="/"
            prefetch
          >
            <a title={title}>{this.renderLogo(logo)}</a>
          </Link>
        </h1>
      </div>
    );
  }
}

export default Header;
