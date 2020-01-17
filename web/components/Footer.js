import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {withRouter} from 'next/router'
import styles from './Footer.module.css'
import SimpleBlockContent from './SimpleBlockContent'

function Footer (props) {
  const {navItems, text, router} = props
  return (
    <div className={styles.root}>
      <nav>
        <ul className={styles.items}>
          {navItems &&
            navItems.map(item => {
              const isActive =
                router.pathname === '/LandingPage' && router.query.slug === item.slug.current
              return (
                <li key={item._id} className={styles.item}>
                  <Link
                    href={{
                      pathname: '/LandingPage',
                      query: {slug: item.slug.current}
                    }}
                    as={`/${item.slug.current}`}
                    prefetch
                  >
                    <a data-is-active={isActive ? 'true' : 'false'}>{item.title}</a>
                  </Link>
                </li>
              )
            })}
        </ul>
      </nav>
      <div className={styles.text}>
        <SimpleBlockContent blocks={text} />
        <a href='https://www.instagram.com/latinolinq/' target='_blank'><img src='https://cdn.sanity.io/images/q4pr99l8/production/b78eb8bc40de56fa2b4f35fab42cb4de2c7d07e1-1455x1454.png' alt=''/></a>
        <a href='https://twitter.com/latinolinq' target='_blank'><img src='https://cdn.sanity.io/images/q4pr99l8/production/ce96a4d56b147faea552a1b864349ee97df0f3f2-1259x1024.png' alt='' /></a>
        <a href='https://www.facebook.com/latinolinq' target='_blank'><img src='https://cdn.sanity.io/images/q4pr99l8/production/0bdae2de0438d949a1f280f2ed6516886908488a-1600x1600.png' alt=''/></a>
      </div>
    </div>
  )
}

Footer.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.shape({
        current: PropTypes.string
      }).isRequired
    })
  ),
  text: PropTypes.arrayOf(PropTypes.object),
  router: PropTypes.shape({
    pathname: PropTypes.string,
    query: PropTypes.shape({
      slug: PropTypes.string
    })
  })
}

export default withRouter(Footer)
