import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Pokemon extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: undefined
    }
  }

  fetchPokemon(url) {
    return fetch(url).then(res => res.json())
  }

  componentDidMount() {
    this.fetchPokemon(this.props.url).then(data => {
        this.setState({data})
    })
  }

  render () {
    if(!this.state.data) {
        return(
            <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', margin: '0 auto', width: '60%', border: '2px solid red', borderBottom: ''}}>
                <Link to={`/${this.props.name}`} >{this.props.name}</Link>
            </div>
        )
    }
    return (
      <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', margin: '0 auto', width: '60%', border: '2px solid red', borderBottom: ''}}>
        <Link to={`/${this.props.name}`} >{this.props.name}</Link>
        <img src={this.state.data.sprites.front_default} alt='Front image' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
      </div>
    )
  }
}

export default Pokemon