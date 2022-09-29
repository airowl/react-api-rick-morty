import Header from './header';
import Hero from './hero';
import List from './list';
import Nav from './nav';
import { useState, useEffect } from 'react';

function App() {

  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {

    (async () => {
      await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`)
        .then(res => res.json())
        .then(res => {
          setList(res.results);
          setTotalPage(res.info.pages);
        })
        .catch(error => {
          console.error(error)
        });
    })();

  }, [page, search]);
  
  const handleNext = (ev) => {
    ev.preventDefault();
    if (page === totalPage) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  }

  const handlePrevious = (ev) => {
    ev.preventDefault();
    if (page === 1) {
      setPage(totalPage);
    } else {
      setPage(page - 1);
    }
  }

  const handlePage = (n) => {
    setPage(n);
  }

  const handleSearch = (text) => {
    setSearch(text);
  }

  return (
    <>
      <Header />
      <Hero onHandleSearch={handleSearch} val={search}/>
      <Nav onHandleNext={handleNext} onHandlePrevious={handlePrevious} totalPage={totalPage} actualPage={page} onHandlePage={handlePage}/>
      <List res={list}/>
      <Nav onHandleNext={handleNext} onHandlePrevious={handlePrevious} totalPage={totalPage} actualPage={page}/>
    </>
  );
}

export default App;
