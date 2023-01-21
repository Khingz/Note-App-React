import React, {useEffect} from 'react';
import Category from '../component/category';
import Note from '../component/note';
import '../styles/Dashboard.css';
import { BsPlusCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Navbar from '../component/navbar';
import { GlobalContext } from '../context/GlobalContext';

const Dashboard = () => {
  const { state, getNotes } = GlobalContext();
  const { data, loading, err } = state.notes;
  console.log(err);

  //assign color depending on category
  const categoryColorPicker = (category) => {
    if (category === 'personal') {
      return '#1d3672';
    } else if (category === 'religious') {
      return '#663e65';
    } else if (category === 'business') {
      return '#a3436a';
    } else if (category === 'education') {
      return '#df6f6a';
    } else {
      return '#1d3672';
    }
  };

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

  const renderCat = categoryKey.map((key, index) => {
    if (categoryCount[key] > 0) {
      return <Category category={key} count={categoryCount[key]} key={index} />;
    }
    return false;
  });


  //Use effect on initial page load to get nootes
  useEffect(() => {
    getNotes(); 
  }, []);
  //render if loading
  if (loading) {
    return (
      <div className="dashboard__main">
        <Navbar />
        <div className="dashboard__container">
          <h3>Loading...</h3>
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
          <h3>Sorry an error occured, try again later...</h3>
        </div>
      </div>
    );
  }

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
                {/* <Category category="home" count="23" />
                <Category category="home" count="23" />
                <Category category="home" count="23" /> */}
                {renderCat}
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
                  <Link to={`/note/${note.id}`} key={note.id}>
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
