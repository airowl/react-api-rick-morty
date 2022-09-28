import React from 'react';
import './style.scss';

const Hero = () => {
  return (
    <section id='hero' className='container d-flex align-items-center justify-content-center'>
      <form className="row g-3">
        <div className="col-auto">
          <label htmlFor="input" className="visually-hidden">Search</label>
          <input type="text" className="form-control" id="input" placeholder="Search" />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">Search</button>
        </div>
      </form>
    </section>
  )
}

export default Hero