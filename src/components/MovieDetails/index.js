import {Component} from 'react'
import './index.css'

const API_KEY = '83994613f4147e3cccdf50803387fe3e'
const BASE_URL = 'https://api.themoviedb.org/3/movie'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

class MovieDetails extends Component {
  state = {movie: null, cast: []}

  async componentDidMount() {
    const {match} = this.props

    const movieResponse = await fetch(
      `${BASE_URL}/${match.params.id}?api_key=${API_KEY}&language=en-US`,
    )
    if (movieResponse.ok) {
      const movieData = await movieResponse.json()
      this.setState({movie: movieData})
    }
    const castResponse = await fetch(
      `${BASE_URL}/${match.params.id}/credits?api_key=${API_KEY}&language=en-US`,
    )
    if (castResponse.ok) {
      const castData = await castResponse.json()
      this.setState({cast: castData.cast})
    }
  }

  render() {
    const {movie, cast} = this.state
    if (!movie) return <p>Loading...</p>

    return (
      <div className="movie-details">
        <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>Rating: {movie.vote_average}</p>
        <p>Duration: {movie.runtime} min</p>
        <p>Genre: {movie.genres.map(g => g.name).join(', ')}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>{movie.overview}</p>
        <h3>Cast</h3>
        <div className="cast-grid">
          {cast.map(member => (
            <div key={member.cast_id} className="cast-card">
              <img
                src={
                  member.profile_path
                    ? `${IMAGE_BASE_URL}${member.profile_path}`
                    : 'https://via.placeholder.com/100'
                }
                alt={member.name}
              />
              <p>
                {member.name} as {member.character}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default MovieDetails
