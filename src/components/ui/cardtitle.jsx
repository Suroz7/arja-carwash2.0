// src/components/ui/CardTitle.js
import React from 'react';

const CardTitle = ({ children, className }) => {
  return <h3 className={`card-title ${className}`}>{children}</h3>;
};

export default CardTitle;
