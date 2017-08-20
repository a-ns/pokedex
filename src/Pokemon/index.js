import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  fetchOnePokemon
} from '../redux/actions/pokemon'
class Pokemon extends Component {

  componentDidMount() {
    this.props.fetchOne(this.props.url)
  }
  render () {
    console.log(this.props)
    if(!this.props.data) {
        return(
            <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', margin: '0 auto', width: '60%', border: '2px solid red', borderBottom: ''}}>
                <Link to={`/${this.props.name}`} >{this.props.name}</Link>
            </div>
        )
    }
    return (
      <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', margin: '0 auto', width: '60%', border: '2px solid red', borderBottom: ''}}>
        <Link to={`/${this.props.name}`} >{this.props.name}</Link>
        <img src={this.props.data.sprites.front_default} alt='Front image' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state[ownProps.name]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchOne: () => {
      dispatch(fetchOnePokemon(ownProps.url))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon)