import React from 'react';

const PharmacyDetails = ({ pharmacy }) => {
  return (
    <div>
      <h1>{pharmacy.name}</h1>
      <p>{pharmacy.description}</p>
      <p style={{fontSize:"20px"}}>{pharmacy.details}</p>
      {/* Add more details and information about the pharmacy here */}
    </div>
  );
};

export default PharmacyDetails;
