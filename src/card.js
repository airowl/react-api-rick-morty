import React from 'react'

const Card = (props) => {
  const res = props.res;
  return (
    <div className='col-12 col-sm-6 col-md-6 col-lg-4 d-flex justify-content-center'>
      <div className="card mb-5 text-center">
      <img src={res.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{res.name}</h5>
        <p className="card-text">{res.species}</p>
      </div>
    </div>
    </div>
  )
}

export default Card