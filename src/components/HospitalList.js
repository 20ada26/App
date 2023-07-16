import React from 'react';
import './HospitalList.css';

const hospitalsData = [
  {
    id: 1,
    name: 'KMCH',
    description: 'This is KMCH.',
    details: 'A Health Care Provider of Western Approach with an Indian Touch.KMCH is the most trusted Multispecialty Hospital in the Southern Indian City of Coimbatore.The relentless service of KMCH in the past 26 years, taken health care to the most modern levels in the region catering to urban and rural population.'

  },
  {
    id: 2,
    name: 'Sri Ramakrishna',
    description: 'This is Sri Ramakrishna Hospital.',
    details: 'Located in the traditional textile capital of South India, Sri Ramakrishna Hospital has attained an iconic reputation since its inception in 1975. Situated on 18 acres of land right in the heart of Coimbatore city, this hospital has in many ways become a part of medical history. In fact, it has been an integral part of the healthcare revolution of modern India.'
  },
  {
    id: 3,
    name: 'KG Hospital',
    description: 'This is KG Hospital.',
    details: 'KG Hospital,a quaternary care,multispecialty hospital, has been at the cutting edge of medicine while staying true to its charitable mission and providing advanced yet affordable healthcare since 1974.KG Hospital, run by K.Govindaswamy Naidu Medical Trust, was founded in 1974 by Dharmaveera K.Govindaswamy Naidu, a leading industrialist and philanthropist from Annur village in Coimbatore district. '

  },
];

const HospitalList = ({ onHospitalClick }) => {
  return (
    <div className="hospital-list-container">
      <div className="hospital-list">
        {hospitalsData.map((hospital) => (
          <div
            key={hospital.id}
            className="hospital-item"
            onClick={() => onHospitalClick(hospital)}
          >
            <h3>{hospital.name}</h3>
            <p>{hospital.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalList;
