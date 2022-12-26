import React from "react";
import Category from "../component/category";
import Note from "../component/note";
import "../styles/Dashboard.css";
import { BsPlusCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Navbar from "../component/navbar";

const Dashboard = () => {
  return (
    <div className="dashboard__mai">
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
        <div className="dashboard__category">
          <h4>Categories</h4>
          <div className="dashboard__category__items">
            <Category category="home" count="23" />
            <Category category="home" count="23" />
            <Category category="home" count="23" />
          </div>
        </div>
        <div className="dashboard__notes">
          <h4>Your Notes</h4>
          <div className="dashboard__note__items">
            <Note title="Expenditure list" categoryColor="#ef5f6a" />
            <Note title="Expenditure list" categoryColor="#1d3672" />
            <Note title="Expenditure list" categoryColor="#663e65" />
            <Note title="Expenditure list" categoryColor="#a3436a" />
            <Note title="Expenditure list" categoryColor="#df6f6a" />
            <Note title="Expenditure list" categoryColor="#1d3672" />
            <Note title="Expenditure list" categoryColor="#663e65" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
