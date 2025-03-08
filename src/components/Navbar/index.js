import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import './index.css'

class Navbar extends Component {
  render() {
    const {searchQuery, onSearchChange, history} = this.props

    return (
      <nav className="navbar">
        <Link to="/" className="logo">
          <h1 className="heading">movieDB</h1>
        </Link>
        <div className="nav-links">
          <Link to="/">Popular</Link>
          <Link to="/top-rated">Top Rated</Link>
          <Link to="/upcoming">Upcoming</Link>
        </div>
        <div className="search-bar">
          <input
            type="text"
            value={searchQuery}
            placeholder="Search movies..."
            onChange={onSearchChange}
          />
          <button
            type="submit"
            onClick={() => history.push(`/search/${searchQuery}`)}
          >
            Search
          </button>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)
