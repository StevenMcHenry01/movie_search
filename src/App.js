import React, { Component } from 'react';
import './App.css';
import MovieRow from './components/movieRow';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.performSearch("avengers")
  }

  performSearch(searchTerm) {
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=dbf4fe0c32103b4cc91897352eedf29c&language=en-US&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Successfuly fetched data")
        const results = searchResults.results

        var movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          const movieRow = <MovieRow key={movie.id}movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})

      },
      error: (xhr, status, err) => {
        console.error("Failure to fetch data", err)
      }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

  render() {
    return (
      <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img className="App-logo" alt="movie reel" width="60px" src="/assets/images/film-roll.svg"/>
              </td>
              <td width="16px"/>
              <td className="title">
               <h1>Movies Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input className="searchForm" onChange={this.searchChangeHandler.bind(this)} placeholder="Enter Movie Title"/>

        {this.state.rows}


      </div>
    );
  }
}

export default App;
