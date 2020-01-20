import React, {Component} from 'react'
import styles from './BoardPage.module.css'

class BoardPage extends Component {
  state = {
    boardMembers: []
  }
  componentDidMount () {
    const sanityClient = require('@sanity/client')
    const client = sanityClient({
      projectId: 'q4pr99l8',
      dataset: 'production',
      token: '',
      useCdn: true // `false` if you want to ensure fresh data
    })
    const query = `*[_type=='board'] | order(displayOrder asc)`
    client.fetch(query).then(response => {
      this.setState({boardMembers: response})
    })
  }
  render () {
    return (
      <section>
        {this.state.boardMembers.map((person, index) => {
          let imageArray = person.memberImage.asset._ref.split('-') // splits _ref into an array of length 4
          let imageUrl = `https://cdn.sanity.io/images/q4pr99l8/production/${imageArray[1]}-${imageArray[2]}.${imageArray[3]}?h=200&fit=max` // gives image <image id>-<original size>.<extension>
          return (
            <div key={index} className={styles.memberDiv} style={{backgroundImage: person.displayOrder % 2 === 0 ? 'white' : '#cccccc'}}
            >
              <img
                src={imageUrl}
                alt=''
                className={styles.foto}
                style={{borderRadius: '8%', float: person.displayOrder % 2 === 0 ? 'right' : 'left', margin: person.displayOrder % 2 === 0 ? '0 0 2px 10px' : '0 10px 2px 0'}}
              />
              <h3 style={{color: '#555555'}}>{person.name}, {person.titleEng}</h3>
              <p style={{color: '#555555'}}>{person.bioEng}</p>
            </div>
          )
        })}
      </section>
    )
  }
}

export default BoardPage
