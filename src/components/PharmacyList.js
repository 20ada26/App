import React from 'react';
import './PharmacyList.css';

const pharmacyData = [
  {
    id: 1,
    name: 'Appollo',
    description: 'This is Apollo Pharmacy.',
    details:"Apollo Pharmacy is a leading retail pharmacy chain in India, owned by Apollo Hospitals Enterprise Limited. It is one of the largest and most trusted pharmacy brands in the country, providing a wide range of healthcare and wellness products. Apollo Pharmacy has a vast network of standalone stores and outlets located across various cities and towns in India. They are easily accessible to customers and provide convenient access to medicines and healthcare products."
  },
  {
    id: 2,
    name: 'MedPlus',
    description: 'This is MedPlus.',
    details:'MedPlus is one of the leading pharmacy chains in India, with a strong presence in Coimbatore. MedPlus offers a comprehensive range of medicines, including prescription drugs, over-the-counter medications, and healthcare products. They cater to diverse medical needs and maintain a well-stocked inventory. MedPlus ensures that all the medicines and healthcare products available at their pharmacies meet high-quality standards. They source products directly from reputable manufacturers and authorized distributors, ensuring authenticity and effectiveness.'
  },
  {
    id: 3,
    name: 'NetMeds',
    description: 'This is NetMeds.',
    details:'NetMeds is a provider of an online store for medicines and healthcare products. It provides an online platform that offers prescription, over-the-counter drugs, and healthcare and wellness products. To make medicine more accessible and affordable throughout the country, thereby helping to fight the rising tide of chronic disease. Netmeds.com is a fully licensed e-pharma portal that offers authenticated prescription and Over the Counter (OTC) medicine along with other health products. An online pharmacy app is a software that ensures fast search, selection, and order of medicines and subsequently safe and timely delivery that drastically maximizes the convenience and better customer experience and saves time along with effort.'
  },
];

const PharmacyList = ({ onPharmacyClick }) => {
  return (
    <div className="pharmacy-list-container">
      <div className="pharmacy-list">
        {pharmacyData.map((pharmacy) => (
          <div
            key={pharmacy.id}
            className="pharmacy-item"
            onClick={() => onPharmacyClick(pharmacy)}
          >
            <h3>{pharmacy.name}</h3>
            <p>{pharmacy.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PharmacyList;
