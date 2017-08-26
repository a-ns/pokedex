import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Pokemon extends Component {
  render () {
    return (
      <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', margin: '0 auto', width: '60%', border: '2px solid red', borderBottom: ''}}>
        <div>{this.props.dexnum}</div>
        <Link to={`/${this.props.name}`}>{this.props.name}</Link>
      </div>
    )
  }
}

export default Pokemon