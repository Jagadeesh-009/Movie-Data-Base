import {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PopularMovies from './components/PopularMovies'
import TopRatedMovies from './components/TopRatedMovies'
import UpcomingMovies from './components/UpcomingMovies'
import MovieDetails from './components/MovieDetails'
import SearchMovies from './components/SearchMovies'
import Navbar from './components/Navbar'
import './App.css'

class App extends Component {
  state = {searchQuery: ''}

  handleSearchChange = event => {
    this.setState({searchQuery: event.target.value})
  }

  handleSearch = () => {
    const {searchQuery} = this.state
    const {history} = this.props
    if (searchQuery) {
      history.push(`/search/${searchQuery}`)
    }
  }

  render() {
    return (
      <Router>
        <Navbar
          onSearchChange={this.handleSearchChange}
          onSearch={this.handleSearch}
        />
        <Switch>
          <Route exact path="/" component={PopularMovies} />
          <Route path="/top-rated" component={TopRatedMovies} />
          <Route path="/upcoming" component={UpcomingMovies} />
          <Route path="/movie/:id" component={MovieDetails} />
          <Route path="/search/:query" component={SearchMovies} />
        </Switch>
      </Router>
    )
  }
}

export default App
