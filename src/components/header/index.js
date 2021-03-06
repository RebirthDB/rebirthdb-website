import React from 'react'
import Link from 'gatsby-link'

import Hamburger from './hamburger'
import styles from './header.module.css'

const Header = ({ title, toggleDrawer }) => (
  <header className={styles.header}>
    <div className={styles.content}>
      <h1 className={styles.title}>
        <Link to="/">{title}</Link>
      </h1>
      <div className="space" />
      <nav className={styles.links}>
        <Link
          className={styles.link}
          activeClassName={styles.active}
          to="/docs"
          exact={true}
        >
          Docs
        </Link>
        <Link className={styles.link} activeClassName={styles.active} to="/api">
          API
        </Link>
        <Link
          className={styles.link}
          activeClassName={styles.active}
          to="/docs/faq"
        >
          FAQ
        </Link>
        <Link
          className={styles.link}
          activeClassName={styles.active}
          to="/community"
        >
          Community
        </Link>
      </nav>
      <Hamburger onClick={toggleDrawer} />
    </div>
  </header>
)

export default Header
