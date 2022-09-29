import React from 'react'

const Nav = (props) => {

  const handleNext = (ev) => {
    props.onHandleNext(ev);
  }

  const handlePrevious = (ev) => {
    props.onHandlePrevious(ev);
  }

  const handlePage = (n) => {
    props.onHandlePage(n);
  }

  const checkPage = (actualPage, n) => {
    if (n === actualPage) {
      return true;
    }
  }

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item"><button className="page-link" onClick={handlePrevious}>Previous</button></li>
          {
            Array.from(Array(props.totalPage), (e, i) => {
              const n = i + 1;
              const nPlus = props.actualPage + 1;
              const nMinus = props.actualPage - 1;
              return <li className={`page-item ${checkPage(props.actualPage, n) || n <= nPlus && n >= nMinus ? "d-block" : "d-none"}`} key={n}><button className={`page-link ${props.actualPage === n ? "active" : ""}`} onClick={() => handlePage(n)}>{n}</button></li>
            })
          }
          <li className="page-item"><button className="page-link" onClick={handleNext}>Next</button></li>
        </ul>
      </nav>
    </>
  )
}

export default Nav