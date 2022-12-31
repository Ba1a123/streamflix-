import './App.css';
import React from 'react';
import requests from './requests';
import Row from './components/Row';

function App() {
  return (
    <div className="App">
      <h1> welcome to netflixclone</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}/>
      <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies}/>

  
    </div>
  );
}

export default App;
