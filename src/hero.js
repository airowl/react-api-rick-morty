import React from 'react';
import './style.scss';

const Hero = (props) => {

  const handleSearch = (ev) => {
    props.onHandleSearch(ev.target.value);
  }

  return (
    <section id='hero' className='container d-flex align-items-center justify-content-center'>
      <div className="col-auto">
        <label htmlFor="input" className="visually-hidden">Search</label>
        <input type="text" className="form-control" id="input" placeholder="Search" onChange={handleSearch} value={props.val}/>
      </div>
    </section>
  )
}

export default Hero