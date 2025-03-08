import {Component} from 'react'
import MoviesList from '../MoviesList'

const API_KEY = '83994613f4147e3cccdf50803387fe3e'
const BASE_URL = 'https://api.themoviedb.org/3/movie'

class TopRatedMovies extends Component {
  state = {movies: []}

  async componentDidMount() {
    const response = await fetch(
      `${BASE_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    )

    if (response.ok) {
      const data = await response.json()
      this.setState({movies: data.results})
    }
  }

  render() {
    const {movies} = this.state
    return (
      <div>
        <h1>Top Rated</h1>
        <MoviesList movies={movies} />
      </div>
    )
  }
}

export default TopRatedMovies
