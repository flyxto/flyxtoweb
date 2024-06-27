import React from 'react';
import '../whatwedo.css';

const RoundCard = ({ title, description }) => {
  return (
    <div className='flex justify-center'>
    <div className="outer2 relative ">
      <div className="card2">
        <div className="ray2"></div>
        <div className="text2 text-3xl text-center mx-24">{title}</div>
        <div className="overlay-content flex-col px-8">
          <p className="text-center text-lg">{description}</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default RoundCard;
