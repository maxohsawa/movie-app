import React from 'react';



function MovieInfo(props){
    return (
        <div>
        <br></br>
            <img src={props.movie.Poster} alt={props.movie.Title} />
            <h3>{props.movie.Title}</h3>
            <h4>{props.movie.Year}</h4>
            <p>{props.movie.Plot}</p>
        </div>
    );
};

export default MovieInfo;