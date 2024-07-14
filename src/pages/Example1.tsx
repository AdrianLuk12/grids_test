import React from 'react';
import GridStackComponent from '../components/GridStackComponent';
import { Link } from 'react-router-dom';

const Example1: React.FC = () => {
  return (
    <div>
      <div className='xyz'>
        <GridStackComponent />
      </div>
      <Link to="/">
      <br></br>
        <button className='button-6'>Back to Home</button>
      </Link>
    </div>
  );
};

export default Example1;