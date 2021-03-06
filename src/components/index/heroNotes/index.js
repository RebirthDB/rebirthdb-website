import React from 'react'
import cx from 'classnames'

import Github from '../../github'
import Twitter from '../../twitter'
import styles from './heroNotes.module.css'

const HeroNotes = props => {
  const stargazers =
    props.stargazers > 1000
      ? Math.round(props.stargazers / 1000) + 'k'
      : props.stargazers

  return (
    <div className={styles.heroNotes}>
      <a href={props.release} className={styles.link}>
        <strong>Latest Release:</strong>&nbsp;{props.latestRelease}
      </a>
      <a href={props.github} className={cx(styles.link, styles.githubLink)}>
        <Github color="#fff" size="22" />
        &nbsp;{stargazers} stars on GitHub
      </a>
      <a
        href={`https://twitter.com/${props.twitter.slice(1)}`}
        className={styles.link}
      >
        <Twitter color="#fff" size="22" />
        &nbsp;{props.twitter} on Twitter
      </a>
    </div>
  )
}

export default HeroNotes
