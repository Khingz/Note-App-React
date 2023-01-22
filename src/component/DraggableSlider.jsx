import React from 'react';
import '../styles/DraggableSlider.css';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { useState } from 'react';

const DraggableSlider = ({ children }) => {
    const [slideCount, setSlideCount] = useState(0);
    const slideLeft = () => {
        console.log(children.length - 2);
        console.log('hello');
    }
  return (
    <div className="slider">
      <div className="slider__controls">
        <HiArrowNarrowLeft onClick={slideLeft}/>
        <HiArrowNarrowRight />
      </div>
      <div className="d__slider__container">{children}</div>
    </div>
  );
};

export default DraggableSlider;
