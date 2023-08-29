import './Loader.css';
import React from 'react';

const Loader = () => {
  return (
    <div className='loader h-100 position-fixed top-0 w-100'>
        <div className='align-items-center d-flex h-100 justify-content-center'>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
  )
}

export default Loader;
