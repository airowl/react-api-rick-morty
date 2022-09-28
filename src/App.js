import Header from './header';
import Hero from './hero';
import List from './list';
import { useState, useEffect } from 'react';

function App() {

  const [list, setList] = useState([]);

  useEffect(() => {

    (async () => {
      await fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(result => setList(result.results))
        .catch(error => console.error(error));
    })();

  }, []);

  return (
    <>
      <Header />
      <Hero />
      <h1>{list.length} characters</h1>
      <List res={list} />
    </>
  );
}

export default App;
