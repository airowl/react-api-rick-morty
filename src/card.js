import React from 'react'

const Card = ({props}) => {

  const [img, title, text] = props;

  return (
    <div className='col-12'>
      <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{text}</p>
        <a href="ciao.com" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    </div>
  )
}

export default Card