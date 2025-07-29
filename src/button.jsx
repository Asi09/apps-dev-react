import React from 'react';

const Button = () => {
  const handleClick = () => {
    window.location.href = 'https://facebook.com';
  };

  return (
    <button className="btn" onClick={handleClick}>
      Go to Facebook
    </button>
  );
};

export default Button;
