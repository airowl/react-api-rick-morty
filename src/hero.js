import React from 'react';
import './style.scss';

const Hero = () => {
  return (
    <section id='hero' className='container d-flex align-items-center justify-content-center'>
      <form class="row g-3">
        <div class="col-auto">
          <label for="input" class="visually-hidden">Search</label>
          <input type="text" class="form-control" id="input" placeholder="Search" />
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3">Search</button>
        </div>
      </form>
    </section>
  )
}

export default Hero