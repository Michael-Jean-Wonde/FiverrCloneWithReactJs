import axios from 'axios';
import {useSelector} from 'react-redux';
import {url} from '../../utills/api';

import '../../utills/i18next';
import { useTranslation } from "react-i18next";

const PayButtons = ({cartItems}) => {

  const {t} = useTranslation();

  const user = useSelector((state) => state.userLogin);

  const handleCheckout = () => {
    axios.post(`${url}/stripe/create-checkout-session`, {
      cartItems,
      userId: user._id
    }).then((res)=> {
      if(res.data.url){
        window.location.href = res.data.url
      }
    }).catch((err) => console.log(err.messsage));
  };
  return ( 
    <>
    <button onClick={() => handleCheckout()}>{t('payment')}</button>
    </>
   );
}

export default PayButtons;













// export default function Payment() {
//     return (
//       <main style={{ padding: "1rem 0" }}>
//         <h2>Payment</h2>
//         <form method="POST" action="https://api.chapa.co/v1/hosted/pay">
//           <input
//             type="hidden"
//             name="public_key"
//             value="CHAPUBK_TEST-sQX2wMyVqPIg7JeS4HoFDednXXggEuZo"
//           />
//           <input type="hidden" name="tx_ref" value="negade-tx-12345678sss9" />
//           <br />
//           <input type="input" name="amount" />
//           <br />
  
//           <input type="hidden" name="currency" value="ETB" />
//           <br />
  
//           <input type="email" name="email" />
//           <br />
  
//           <input type="input" name="first_name" />
//           <br />
  
//           <input type="input" name="last_name" />
//           <br />
  
//           <input type="input" name="title" />
//           <br />
  
//           <input
//             type="hidden"
//             name="description"
//             value="Paying with Confidence with cha"
//           />
//           <input
//             type="hidden"
//             name="logo"
//             value="https://yourcompany.com/logo.png"
//           />
//           <input
//             type="hidden"
//             name="callback_url"
//             value="http://localhost:5000/order"
//           />
//           <input
//             type="hidden"
//             name="return_url"
//             value="https://example.com/returnurl"
//           />
//           <input type="hidden" name="meta[title]" value="test" />
//           <button type="submit">Pay Now</button>
//         </form>
//       </main>
//     );
//   }