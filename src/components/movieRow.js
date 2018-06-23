import React from 'react'

class MovieRow extends React.Component {
	viewMovie() {
		const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
		window.location.href = url
	}

	render() {
		return <table className="movieTable" key={this.props.movie.id}>
		<tbody>
			<tr>
				<td className="tableImage">
					<img alt="poster for a movie" src={this.props.movie.poster_src}/>
				</td>
				<td className="tableContent">
					<h3>{this.props.movie.title}</h3>
					<p>{this.props.movie.overview}</p>
					<input className="btn btn-success" type="button" onClick={this.viewMovie.bind(this)} value="View"/>
				</td>
			</tr>
		</tbody>
	</table>
	}
}

export default MovieRow