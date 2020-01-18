import React from 'react'
import styles from './English.module.css'

const Español = () => {
    return (
        <page className={styles.flexbox}>
            <a href='/aboutEsp'><button className={styles.button}>Quienes Somos</button></a>
            <a href='/servicesEsp'><button className={styles.button}>Servicios</button></a>
            <a href='/boardesp'><button className={styles.button}>Junta</button></a>
            <a href='/newsEsp'><button className={styles.button}>Noticias</button></a>
            <a href='/calendar'><button className={styles.button}>Calendario</button></a>
            <a href='/contactEsp'><button className={styles.button}>Contacto</button></a>
            <a href='https://www.paypal.com/fundraiser/112574644767835624/charity/1436824' target='_blank'><button className={styles.button}>Contribuir</button></a>
            <a href='/english'><button className={styles.button}>This page in English</button></a>
        </page>
    )
}
export default Español