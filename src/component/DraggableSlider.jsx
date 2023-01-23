import React, {useRef} from 'react';
import '../styles/DraggableSlider.css';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { HiArrowNarrowLeft } from 'react-icons/hi';

const DraggableSlider = ({ children }) => {
    // const [slideCount, setSlideCount] = useState(0);

    let sliderRef = useRef(0) 

    const slideLeft = (e) => {
        console.log(sliderRef.current);
    }
  return (
    <div className="slider" ref={sliderRef}>
      <div className="slider__controls" >
        <HiArrowNarrowLeft onClick={slideLeft}/>
        <HiArrowNarrowRight />
      </div>
      <div className="d__slider__container">{children}</div>
    </div>
  );
};

export default DraggableSlider;
