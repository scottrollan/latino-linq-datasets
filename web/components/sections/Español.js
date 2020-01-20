import React from 'react'
import styles from './EngEsp.module.css'

const Español = () => {
    return (
        <section className={styles.flexbox}>
            <a href='/aboutesp'><button className={styles.button}>Quienes Somos</button></a>
            <a href='/servicesesp'><button className={styles.button}>Servicios</button></a>
            <a href='/newsesp'><button className={styles.button}>Noticias</button></a>
            <a href='/calendar'><button className={styles.button}>Calendario</button></a>
            <a href='/boardesp'><button className={styles.button}>Junta Directiva</button></a>
            <a href='/supportesp'><button className={styles.button}>Apóyanos</button></a>
            <a href='/contactesp'><button className={styles.button}>Contacto</button></a>
            <a href='https://www.paypal.com/fundraiser/112574644767835624/charity/1436824' target='_blank'><button className={styles.button}>Contribuir</button></a>
            <a href='/english'><button className={styles.button}>This section in English</button></a>
        </section>
    )
}
export default Español