import React from 'react';
import './InsuranceList.css';

const insuranceData = [
  {
    id: 1,
    name: 'Life Insurance',
    description: 'This is Life Insurance.',
    details:'Life insurance is a contract between an individual (policyholder) and an insurance company. It provides financial protection to the policyholders beneficiaries in the event of the policyholders death. In exchange for regular premium payments, the insurance company promises to pay a lump sum amount, known as the death benefit, to the designated beneficiaries upon the death of the insured.Life insurance plays a crucial role in financial planning by providing protection and peace of mind to individuals and their families. It is recommended to assess ones financial needs and consult with insurance professionals to determine the appropriate coverage amount and policy type.'
  },
  {
    id: 2,
    name: 'Health Insurance',
    description: 'This is Health Insurance.',
    details: 'Health insurance is a type of insurance coverage that pays for medical and surgical expenses incurred by an insured individual. It provides financial protection to individuals or families in the event of unexpected medical expenses or health-related emergencies. Health insurance plans vary in terms of coverage, cost, and network of healthcare providers. Employer-Sponsored Health Insurance: Many employers offer health insurance coverage to their employees as part of their employee benefits package. These plans are often cost-effective and provide coverage for a range of medical services.'
  },
  {
    id: 3,
    name: 'Disability Insurance',
    description: 'This is Disability Insurance.',
    details:'Disability insurance provides financial protection in the event that you are unable to work due to a disability or illness. It is designed to replace a portion of your income if you become disabled and are unable to earn a living. Disability insurance policies vary in terms of coverage, waiting periods, benefit periods, and definition of disability. Its important to note that disability insurance policies vary in terms of coverage, including the definition of disability and the percentage of income replacement offered. Some policies may cover total disability only, while others may also cover partial disability that limits your ability to work. It is advisable to review the terms and conditions of disability insurance policies carefully, understand the coverage limits, waiting periods, benefit periods, and any exclusions or limitations before purchasing a policy.'
  },
  {
    id: 4,
    name: 'Travel Insurance',
    description: 'This is Travel Insurance.',
    details :'Travel insurance is a type of insurance coverage that provides financial protection and assistance for unexpected expenses and emergencies that may occur while traveling. It is designed to help travelers deal with a wide range of situations such as medical emergencies, trip cancellations/interruptions, lost or delayed baggage, flight accidents, and emergency evacuations.Provides a lump sum benefit to beneficiaries in the event of accidental death or permanent disability during the trip.Its important to carefully review the terms, coverage limits, exclusions, and policy details before purchasing travel insurance to ensure that it meets your specific needs and provides adequate protection for your travel plans.'
  },
  {
    id: 5,
    name: 'Critical Illness Insurance',
    description: 'This is Critical Illness Insurance.',
    details: 'Critical illness insurance is a type of insurance policy that provides financial protection in the event that the policyholder is diagnosed with a critical illness covered by the policy. The purpose of critical illness insurance is to provide financial support to the insured and their family during a difficult time, when they may face significant medical expenses, loss of income due to inability to work, or additional costs associated with the illness. Its important to note that the specific critical illnesses covered and the terms and conditions of the policy may vary between insurance providers. It is advisable to carefully review the policy details, including the coverage, exclusions, waiting periods, and premium costs, before purchasing critical illness insurance.'
  },
];

const InsuranceList = ({ onInsuranceClick }) => {
  return (
    <div className="insurance-list-container">
      <div className="insurance-list">
        {insuranceData.map((insurance) => (
          <div
            key={insurance.id}
            className="insurance-item"
            onClick={() => onInsuranceClick(insurance)}
          >
            <h3>{insurance.name}</h3>
            <p>{insurance.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsuranceList;
