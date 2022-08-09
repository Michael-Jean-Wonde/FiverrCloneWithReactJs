import React from 'react';
import './proffessionalsList.css';
import {headerItems, professionals} from '../utills/ProfessionalsData';
import Professionals from '../components/professionals';
import BackToTop from '../components/BackToTop';

const ProfessionalsList = () => {
  return (
    <div>
      <div className='item-container'>
        {headerItems && headerItems.map((item, index) => <p>{item}</p>)}
      </div>
      <div className='home'>
        <div className='home-container'>
          <div className='home-row'>
            {professionals.slice(0,2).map((item) => (
              <Professionals
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
              specification={item.specification}
              detail={item.detail} 
              />
            ))}
          </div>
          <div className='home-row'>
            {professionals.slice(2,5).map((item) => (
              <Professionals
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
              specification={item.specification}
              detail={item.detail} 
              />
            ))}
          </div>
          <div className='home-row'>
            {professionals.slice(4,6).map((item) => (
              <Professionals
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
              specification={item.specification}
              detail={item.detail} 
              />
            ))}
          </div>
          <div style={{marginTop: '0px'}}>
            <BackToTop />
          </div>
        </div>
      </div> 
    </div>
  )
}

export default ProfessionalsList;
