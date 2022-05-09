import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = () => (
  <div className="about__content">
    <ul className="about__list">
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
