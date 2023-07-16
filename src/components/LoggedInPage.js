import React, { useState } from 'react';
import './LoggedInPage.css';
import HospitalList from './HospitalList';
import HospitalDetails from './HospitalDetails';
import PharmacyList from './PharmacyList';
import PharmacyDetails from './PharmacyDetails';
import InsuranceList from './InsuranceList'; // Import the Insurance components
import InsuranceDetails from './InsuranceDetails';



const LoggedInPage = () => {
  const [activeSection, setActiveSection] = useState('');
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);
  const [selectedInsurance, setSelectedInsurance] = useState(null);
  const [isSettingsMenuShown, setIsSettingsMenuShown] = useState(false);

  const handleNavigation = (section) => {
    setActiveSection(section);
    setSelectedHospital(null);
    setSelectedPharmacy(null);
    setSelectedInsurance(null);
  };

  const handleHospitalClick = (hospital) => {
    setSelectedHospital(hospital);
  };

  const handlePharmacyClick = (pharmacy) => {
    setSelectedPharmacy(pharmacy);
  };

  const handleInsuranceClick = (insurance) => {
    setSelectedInsurance(insurance);
  };

  const handleSettingsMenuClick = () => {
    setIsSettingsMenuShown(!isSettingsMenuShown);
  };

  return (
    <div className="logged-in-page">
      <div className="logo">Medcare</div>
      <div
        className={`settings-bar ${isSettingsMenuShown ? 'active' : ''}`}
        onClick={handleSettingsMenuClick}
      >
        Settings
      </div>
      {/* Settings menu */}
      <div className={`settings-menu ${isSettingsMenuShown ? 'active' : ''}`}>
        <ul>
          {/* Add the menu items here */}
          <button onClick={() => setActiveSection('settings')}>Profile</button>
          <button onClick={() => setActiveSection('settings')}>Health</button>
          <button onClick={() => setActiveSection('settings')}>Setings</button>
          <button onClick={() => setActiveSection('settings')}>Help</button>
          <button onClick={() => setActiveSection('settings')}>Log Out</button>
          {/* Add more menu items if needed */}
        </ul>
      </div>
      <div className="nav-container">
        <div className="navigation">
          <div
            className={`nav-item ${activeSection === 'hospitals' ? 'active' : ''}`}
            onClick={() => handleNavigation('hospitals')}
          >
            Hospitals
          </div>
          <div
            className={`nav-item ${activeSection === 'pharmacy' ? 'active' : ''}`}
            onClick={() => handleNavigation('pharmacy')}
          >
            Pharmacy
          </div>
          <div
            className={`nav-item ${activeSection === 'insurance' ? 'active' : ''}`}
            onClick={() => handleNavigation('insurance')}
          >
            Insurance
          </div>
        </div>
      </div>
      {activeSection === 'hospitals' ? (
        <>
          <HospitalList onHospitalClick={handleHospitalClick} />
          {selectedHospital && <HospitalDetails hospital={selectedHospital} />}
        </>
      ) : activeSection === 'pharmacy' ? (
        <>
          <PharmacyList onPharmacyClick={handlePharmacyClick} />
          {selectedPharmacy && <PharmacyDetails pharmacy={selectedPharmacy} />}
        </>
      ) : activeSection === 'insurance' ? (
        <>
          <InsuranceList onInsuranceClick={handleInsuranceClick} />
          {selectedInsurance && <InsuranceDetails insurance={selectedInsurance} />}
        </>
      ) : null}
    </div>
    
  );
};

export default LoggedInPage;