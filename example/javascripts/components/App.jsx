import React from 'react';
import PropTypes from 'prop-types';
import NavLink from './NavLink';

function constructLinks() {
  return (
    <ul className="navigation">
      <li><NavLink to="/sidebar">Sidebar</NavLink></li>
      <li><NavLink to="/events">Events</NavLink></li>
      <li><NavLink to="/iframe">iframe</NavLink></li>
      <li><NavLink to="/standard-horizontal">Horizontal</NavLink></li>
      <li><NavLink to="/standard-vertical">Vertical</NavLink></li>
      <li><NavLink to="/minimal-size">Pane Minimal Size</NavLink></li>
      <li><NavLink to="/percentage">Width in Percentage</NavLink></li>
      <li><NavLink to="/nested">Nested Layout</NavLink></li>
    </ul>
  );
}

function App(props) {
  return (
    <div>
      <div className="main">
        <nav className="navigation-bar">
          {constructLinks()}
        </nav>
        <div className="child-content">
          {props.children}
        </div>
      </div>
      <header>
        <h1>React Splitter Layout</h1>
        <p>A split layout for React and modern browsers.</p>
      </header>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
