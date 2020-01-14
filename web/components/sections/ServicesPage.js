import React, {Component} from 'react'

class ServicesPage extends Component {
  state = {
    services: [],
    numberOfItems: 0
  }
  render () {
    let services = []
    const sanityClient = require('@sanity/client')
    const client = sanityClient({
      projectId: 'q4pr99l8',
      dataset: 'production',
      token: '',
      useCdn: true // `false` if you want to ensure fresh data
    })
    const query = `*[_type=='service'] | order(displayOrder asc)`
    client.fetch(query).then(service => {
      service.forEach(s => {
        services.push(s)
      })
      this.setState({services: services})
      this.setState({numberOfItems: services.length})
    })

    return (
      <section>
        {this.state.services.map((service, index) => {
          let imageArray = service.serviceImage.asset._ref.split('-') // splits _ref into an array of length 4
          let imageUrl = `https://cdn.sanity.io/images/q4pr99l8/production/${imageArray[1]}-${imageArray[2]}.${imageArray[3]}` // gives image <image id>-<original size>.<extension>
          return (
            <div key={index}>
              <span>
                <img
                  src={imageUrl}
                  alt=''
                />
                <h3>{service.titleEng}</h3>
                <p>{service.descriptionEng}</p>
              </span>
            </div>
          )
        })}
        <style jsx>{`
          div {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            width: 100%;
            text-align: center;
          }
          span {
            width: calc(80% / ${this.state.numberOfItems});
          }
          @media only screen and (max-width: 760px) {
            div {
              flex-direction: column;
            }
            span {
              width: 80%;
            }
          }
        `}</style>
      </section>
    )
  }
}

export default ServicesPage
