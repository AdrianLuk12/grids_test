import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home: React.FC = () => {
  return (
    <div>
      <h1>GridStack Examples</h1>
      <nav>
        <ul>
          <li>
            <Link to="/example1">
              <button className='button-6'>Example 1 (circles)</button>
            </Link>
          </li>
          <li>
            <Link to="/example2">
              <button className='button-6'>Example 2 (pictures)</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;