import React from 'react'
import Nav from './nav';
import Card from './card';

const List = (props) => {
  const res = props.res;
  return (
    <section className='container'>
      <div className='row'>
        {
          res.map((e, i) => (
            <Card res={e} key={i}/>
          ))
        }
      </div>
    </section>
  )
}

export default List