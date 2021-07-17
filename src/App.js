
import './App.css';
import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import MovieInfo from './MovieInfo';
import axios from 'axios';

function App() {

  const [query, setQuery] = useState({
    url: 'http://www.omdbapi.com/?i=tt3896198&apikey=a96dfc27',
    option: '&t=',
    title: '',
    searchURL: ''
  });

  const [movie, setMovie] = useState({});

  useEffect(() => {
    query.searchURL.length > 0 &&
    (async () => {
      try {

        /* fetch */
        // const response = await fetch(query.searchURL);
        // const data = await response.json();
        // await setMovie({...movie, ...data});

        /* axios */
        const response = await axios.get(query.searchURL);
        await setMovie({...movie, ...response.data});
        
        await setQuery({...query, searchURL: '', title: ''});
      }
      catch (errors){
        console.log(errors);
      }
    })();
  }, [query]);

  const handleChange = (e) => {
    setQuery({...query, ...{ [e.target.id]: e.target.value}});
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery({...query, searchURL: query.url + query.option + query.title})
    
  }

  return (
    <div className="App">
    <h2>Movie App</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Movie title</label>
        <input
          id="title"
          type="title"
          value={query.title}
          onChange={handleChange}

        />
        <input 
          type="submit"
          value="Search for a movie"
          onSubmit={handleSubmit}
        />
      </form>
      {Object.keys(movie).length > 0 && <MovieInfo movie={movie} />}
    </div>
  );
}

export default App;
