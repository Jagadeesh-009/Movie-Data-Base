import {Component} from 'react'
import MoviesList from '../MoviesList'
import './index.css'

const API_KEY = '83994613f4147e3cccdf50803387fe3e'
const BASE_URL = 'https://api.themoviedb.org/3/movie'

class TopRatedMovies extends Component {
  state = {movies: [], page: 1}

  componentDidMount() {
    this.fetchMovies()
  }

  fetchMovies = async () => {
    const {page} = this.state
    const response = await fetch(
      `${BASE_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`,
    )
    if (response.ok) {
      const data = await response.json()
      this.setState({movies: data.results})
    }
  }

  handlePageChange = increment => {
    this.setState(prevState => {
      const newPage = prevState.page + increment
      return newPage >= 1 ? {page: newPage} : prevState
    }, this.fetchMovies)
  }

  render() {
    const {movies, page} = this.state
    return (
      <div className="movies-container">
        <h1 className="title">Top Rated Movies</h1>
        <MoviesList movies={movies} />
        <div className="pagination">
          <button
            type="button"
            className="preview"
            disabled={page === 1}
            onClick={() => this.handlePageChange(-1)}
          >
            Prev
          </button>
          <p>{page}</p>
          <button
            type="button"
            className="preview"
            onClick={() => this.handlePageChange(1)}
          >
            Next
          </button>
        </div>
      </div>
    )
  }
}

export default TopRatedMovies
