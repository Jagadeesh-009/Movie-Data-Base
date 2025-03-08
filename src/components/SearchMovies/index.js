import {Component} from 'react'
import MoviesList from '../MoviesList'

const API_KEY = '83994613f4147e3cccdf50803387fe3e'
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie'

class SearchMovies extends Component {
  state = {movies: []}

  async componentDidMount() {
    const {match} = this.props
    const {params} = match
    const {query} = params

    const response = await fetch(
      `${SEARCH_URL}?api_key=${API_KEY}&language=en-US&query=${query}&page=1`,
    )
    if (response.ok) {
      const data = await response.json()
      console.log(data.results)
      this.setState({movies: data.results})
    }
  }

  render() {
    const {movies} = this.state
    return (
      <div>
        <h1>Search Results</h1>
        <MoviesList movies={movies} />
      </div>
    )
  }
}

export default SearchMovies
