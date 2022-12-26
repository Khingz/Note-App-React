import React from 'react'
import '../styles/note.css';

const note = ({title, categoryColor}) => {
  return (
    <div className='note__container'>
        <div className="note__category" style={{backgroundColor: `${categoryColor}`}}></div>
        <div className="note__title">
            <p>{title}</p>
        </div>
    </div>
  )
}

export default note