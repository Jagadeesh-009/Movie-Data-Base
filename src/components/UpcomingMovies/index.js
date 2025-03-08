import {Component} from 'react'
import MoviesList from '../MoviesList'

const API_KEY = '83994613f4147e3cccdf50803387fe3e'
const BASE_URL = 'https://api.themoviedb.org/3/movie'

class UpcomingMovies extends Component {
  state = {movies: []}

  async componentDidMount() {
    const response = await fetch(
      `${BASE_URL}/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    )
    console.log(response.ok)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      this.setState({movies: data.results})
    }
  }

  render() {
    const {movies} = this.state
    return (
      <div>
        <h1>Upcoming</h1>
        <MoviesList movies={movies} />
      </div>
    )
  }
}

export default UpcomingMovies
