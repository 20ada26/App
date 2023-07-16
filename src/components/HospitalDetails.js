import React from 'react';

const HospitalDetails = ({ hospital }) => {
  return (
    <div>
      <h1>{hospital.name}</h1>
      <p>{hospital.description}</p>
      <p style={{fontSize:"20px"}}>{hospital.details}</p>
      {/* Add more details and information about the hospital here */}
    </div>
  );
};

export default HospitalDetails;
