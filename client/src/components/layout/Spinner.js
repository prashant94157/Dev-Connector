import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <section className='container'>
      <img
        src={spinner}
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
    </section>
  );
};

export default Spinner;
