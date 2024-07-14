import React from 'react';
import GridStackExample2 from '../components/GridStackExample2';
import { Link } from 'react-router-dom';

const Example2: React.FC = () => {
  return (
    <div>
      <div className='xyz'>
        <GridStackExample2 />
      </div>
      <Link to="/">
      <br></br>
        <button className='button-6'>Back to Home</button>
      </Link>
    </div>
  );
};

export default Example2;