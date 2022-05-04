import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import SinglePage from './SinglePage';

const About = () => (
  <div>
    <ul>
      <li>
        <Link to="about-app">About App</Link>
      </li>
      <li>
        <Link to="about-author">About Author</Link>
      </li>
    </ul>
    <Outlet />
  </div>
);
export default About;
