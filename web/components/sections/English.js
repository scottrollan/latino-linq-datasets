import React from 'react'
import styles from './EngEsp.module.css'

const English = () => {
    return (
        <page className={styles.flexbox}>
            <a href='/about'><button className={styles.button}>About Us</button></a>
            <a href='/services'><button className={styles.button}>Services</button></a>
            <a href='/news'><button className={styles.button}>News</button></a>
            <a href='/calendar'><button className={styles.button}>Calendar</button></a>
            <a href='/board'><button className={styles.button}>Board of Directors</button></a>
            <a href='/support'><button className={styles.button}>Support Us</button></a>
            <a href='/contact'><button className={styles.button}>Contact</button></a>
            <a href='https://www.paypal.com/fundraiser/112574644767835624/charity/1436824' target='_blank'><button className={styles.button}>Contribute</button></a>
            <a href='/español'><button className={styles.button}>Página en español</button></a>
        </page>
    )
}
export default English