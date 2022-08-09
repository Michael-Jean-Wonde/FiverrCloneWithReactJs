import React from 'react';
import BuyerHeader from '../components/buyerHeader';
import UserDetail from '../components/userDetail';
import ProfessionalsList from './proffessionalsList';

const Buyer = () => {
  return (
    <div>
        <BuyerHeader />
        <ProfessionalsList />
    </div>
  )
}

export default Buyer;