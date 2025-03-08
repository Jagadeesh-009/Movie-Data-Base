import {Component} from 'react'
import MoviesList from '../MoviesList'

const apiKey = '83994613f4147e3cccdf50803387fe3e'

class PopularMovies extends Component {
  state = {movies: []}

  async componentDidMount() {
    const option = {
      method: 'GET',
    }
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
      option,
    )

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
        <h1>Home</h1>
        <MoviesList movies={movies} />
      </div>
    )
  }
}

export default PopularMovies
