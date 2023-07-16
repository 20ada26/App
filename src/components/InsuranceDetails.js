import React from 'react';

const InsuranceDetails = ({ insurance }) => {
  return (
    <div>
      <h1>{insurance.name}</h1>
      <p>{insurance.description}</p>
      <p style={{fontSize:"20px"}}>{insurance.details}</p>
      {/* Add more details and information about the insurance plan here */}
    </div>
  );
};

export default InsuranceDetails;
