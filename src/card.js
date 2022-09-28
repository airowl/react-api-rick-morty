import React from 'react'

const Card = (props) => {
  const res = props.res;
  return (
    <div className='col-12 col-sm-4 col-lg-3'>
      <div className="card">
      <img src={res.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{res.name}</h5>
        <p className="card-text">{res.species}</p>
        <a href="ciao.com" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    </div>
  )
}

export default Card