import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../assets/lottie/UnderConstruction1.json';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Dashboard Page</h2>
      <div className="animation-container">
        <Lottie 
          animationData={animationData} 
          loop={true} 
          autoplay={true}
        />
      </div>
    </div>
  );
};

export default DashboardPage;