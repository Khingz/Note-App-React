import React, { useEffect } from 'react';
import Category from '../component/category';
import Note from '../component/note';
import '../styles/Dashboard.css';
import { BsPlusCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Navbar from '../component/navbar';
import { GlobalContext } from '../context/GlobalContext';
import Spinner from '../component/Spinner';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Dashboard = () => {
  const { state, getNotes, categoryColorPicker } = GlobalContext();
  const { data, loading, err } = state.notes;

  //category count
  let categoryCount = {
    personal: 0,
    religious: 0,
    business: 0,
    education: 0,
  };

  data.map((note) => {
    return categoryCount[note.category]++;
  });

  let categoryKey = Object.keys(categoryCount);
  let filteredKey = categoryKey.filter((key) => categoryCount[key] > 0);

  const renderCat = filteredKey.map((key, index) => {
    return (
      <Link to={`/notes/categories/${key}`} key={index}>
        <Category category={key} count={categoryCount[key]} key={index} />
      </Link>
    );
  });

  //Use effect on initial page load to get nootes
  useEffect(
    () => {
      getNotes();
    },
    // eslint-disable-next-line
    []
  );

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 620, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  //render if loading
  if (loading) {
    return (
      <div className="dashboard__main">
        <Navbar />
        <div className="dashboard__spinner">
          <Spinner />
        </div>
      </div>
    );
  }

  //render if error
  if (Object.keys(err).length > 0) {
    return (
      <div className="dashboard__main">
        <Navbar />
        <div className="dashboard__container">
          <h3>Something went wrong, please try again...</h3>
        </div>
      </div>
    );
  }

  //render page if no error and not laoding
  return (
    <div className="dashboard__main">
      <Navbar />
      <div className="dashboard__container">
        <div className="dashboard__add__task">
          <Link to="/add-note">
            <BsPlusCircleFill />
          </Link>
        </div>
        <p className="dashboard__user">
          Hello Alan, <span>Welcome</span>
        </p>
        <hr />
        <div className="dashboard__category">
          {data.length === 0 ? null : (
            <>
              <h4>Categories</h4>
              <div className="dashboard__category__items">
                <Carousel
                  responsive={responsive}
                  swipeable={true}
                  draggable={true}
                >
                  {renderCat}
                </Carousel>
              </div>
            </>
          )}
        </div>
        <div className="dashboard__notes">
          <h4>Your Notes</h4>
          <div className="dashboard__note__items">
            {data.length === 0 ? (
              <p className="">
                You do not have any note at the moment, please click the + sign
                at the bottom right to add a note
              </p>
            ) : (
              data.map((note) => {
                return (
                  <Link to={`/notes/${note.id}`} key={note.id}>
                    <Note
                      title={note.title}
                      categoryColor={categoryColorPicker(note.category)}
                    />
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
