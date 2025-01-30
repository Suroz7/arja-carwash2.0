// src/components/ui/Card.js
import React from 'react';
import CardHeader from './cardheader';
import CardTitle from './cardtitle';
import CardContent from './cardcontent';
import Button from './button';
import { CheckCircle } from 'lucide-react'; // Assuming you're using lucide-react icons

const Card = ({ service, index }) => {
  return (
    <div key={index} className="service-card p-4 rounded-2xl shadow-lg border border-gray-200">
      <CardHeader>
        <div className="flex justify-center mb-4">{service.icon}</div>
        <CardTitle className="text-xl font-semibold">{service.name}</CardTitle>
        <p className="text-lg font-bold text-blue-600">{service.price}</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-4 text-gray-700">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={16} /> {feature}
            </li>
          ))}
        </ul>
        
      </CardContent>
    </div>
  );
};

export default Card;
