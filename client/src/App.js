import React, { Component } from 'react'
import './App.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { allTracks, oneTrack } from './actioins/Actions.js'
import Error from './components/Error'
import Table from './components/Table'
import SearchBlock from './components/SearchBlock'
import Nav from './components/Nav'

class App extends Component {
  static propTypes = {
    getAllTracks: PropTypes.func.isRequired,
    getTrack: PropTypes.func.isRequired,
  }
  static defaultProps = {
  }

  constructor(){
    super()
    this.state = {
      search: "",
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handleClick = this.handleClick.bind(this)
    
 }
 
 
  componentDidMount() {
    this.props.getAllTracks()
  }

  handleClick(id){
    this.props.getTrack(id)
  }

  handleStart(){
    const { search } = this.state
    this.props.getTrack(search)
  }

  handleChange(event){
    const { value } = event.target
    this.setState({search: value})
  }
 
  render() {
    const { results=[], isError, errorMsg } = this.props
    return (
      <div className="App">
        <Nav />
        <SearchBlock handleStart={this.handleStart} handleChange={this.handleChange} />
        {results.length > 0 && 
          <Table results={results} handleClick={this.handleClick} />
        } 
        {isError &&  
          <Error errorMsg={errorMsg}/>
        } 
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  results: state.tracks.results,
  isError: state.tracks.isError,
  errorMsg: state.tracks.errorMsg,
})

const mapDispatchToProps = (dispatch) => ({
  getAllTracks: () => {
    dispatch(allTracks())
  },
  getTrack: (id) => {
    dispatch(oneTrack(id))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)


 
 
