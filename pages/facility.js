import React from 'react'
import ReactMarkdown from 'react-markdown'
import facility from '../content/output/facility.json'

const categories = Object.keys(facility).slice(0, 7)

class Facility extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div id="facility" className="category">
        <h1 class="ui horizontal divider header">
          <i class="cogs icon"></i>
          Facility
        </h1>
        <div class="ui divided items">
          { categories.map((category, i) => {
            return (
              <div className={ i === 0 ? '' : 'category' }>
                <h1>{ category }</h1>
                <div className="ui stackable four cards" style={{ marginTop: '30px' }}>
                  { facility[category].map((item) => {
                    return (
                      <a className="card" href={ item.url } target="_blank" >
                        <div className="image">
                          <img src={ `/static/images/facility/${item.img}.jpg` } />
                        </div>
                        <div class="content">
                          <p class="header">{ item.name }</p>
                        </div>
                      </a>
                    )
                  }) }
                </div>
              </div>
            )
          }) }

        </div>
      </div>
    )
  }
}

export default Facility
