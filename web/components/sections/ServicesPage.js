import React, {Component} from 'react'
import styles from './ServicesPage.module.css'

class ServicesPage extends Component {
  state = {
    services: []
  }
  componentDidMount () {
    const sanityClient = require('@sanity/client')
    const client = sanityClient({
      projectId: 'q4pr99l8',
      dataset: 'production',
      token: '',
      useCdn: true
    })
    const query = `*[_type=='service'] | order(displayOrder asc)`
    client.fetch(query).then(response => {
      this.setState({services: response})
    })
  }
  render () {
    return (
      <section>
        <div className={styles.flexbox}>
          {this.state.services.map((service, index) => {
            let imageArray = service.serviceImage.asset._ref.split('-') // splits _ref into an array of length 4
            let imageUrl = `https://cdn.sanity.io/images/q4pr99l8/production/${imageArray[1]}-${imageArray[2]}.${imageArray[3]}` // gives image <image id>-<original size>.<extension>
            return (
              <span key={index} className={styles.service}>
                <img
                  src={imageUrl}
                  alt=''
                />
                <h3>{service.titleEng}</h3>
                <p>{service.descriptionEng}</p>
              </span>
            )
          })}
        </div>
        <div className={styles.flexbox} id={styles.contactDiv}>
          <a href='mailto:LatinoLinQ@gmail.com'><button className={styles.contactBtn}>Email Us</button></a>
          <a href='tel:678-744-5467'><button className={styles.contactBtn}>Call Us</button></a>

        </div>

      </section>
    )
  }
}

export default ServicesPage
