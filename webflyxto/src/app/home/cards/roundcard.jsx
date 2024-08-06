import React from 'react';
import '../whatwedo.css';

const RoundCard = ({ title, description }) => {
  return (
    <div className='flex justify-center maincard'>
      <div className="outer2 relative scale-75 md:scale-100">
        <div className="card2">
          <div className=""></div>
          <div className="text2 text-3xl text-center mx-24">{title}</div>
          <div className="overlay-content flex-col px-8">
            <p className="text-center text-lg">{description}</p>
          </div>
        </div>
        <div className="hidden md:block reflection">
          <div className="card2 reflection-card blur-lg">
            <div className="ray2"></div>
            <div className="text2 text-xl text-center mx-24 p-2">{title}</div>
            <div className="overlay-content flex-col px-8">
              <p className="text-center text-[12px]">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default RoundCard;
