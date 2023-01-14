import React from 'react';
import '../styles/category.css';

const category = ({category, count}) => {
  return (
    <div className='category__container'>
        <p className='category__count'>{count} {Number(count) > 1 ? 'notes' : 'note'}</p>
        <p className='category__title'>{category}</p>
        <div className='category__hr'></div>
    </div>
  )
}

export default category