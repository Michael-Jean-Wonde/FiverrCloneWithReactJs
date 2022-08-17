import React from 'react';
import './proffessionalsList.css';
import {headerItems, professionals} from '../utills/ProfessionalsData';
import Professionals from '../components/professionals';
import BackToTop from '../components/BackToTop';
import Gigslist from '../components/giglist';

const ProfessionalsList = () => {
  return (
    <div>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='home-row'>
          <Gigslist />
          </div>
        </div>
      </div> 
    </div>
  )
}

export default ProfessionalsList;
