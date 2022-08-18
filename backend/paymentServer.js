// ############ PAYMENT BACKEND #########################
import express from 'express';
import Stripe from 'stripe';
import dotenv from 'dotenv';

dotenv.config();

const stripe = Stripe(process.env.STRIPE_KEY);

const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {

  // const line_items = req.body.cartItems.map(item => {
  //   return {
  //     price_data: {
  //       currency: "usd",
  //       product_data: {
  //         name: item.name,
  //         metadata: {
  //           id: item.id
  //         }
  //       },
  //       unit_amount: 2000,
  //     },
  //     quantity: 1,
  //   }
  // })
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price_data: {
          currency: "etb",
          product_data: {
            name: "Mr. Wondimu Baye",
          },
          unit_amount: 2000 * 100,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/profile`,
    cancel_url: `${process.env.CLIENT_URL}/profile`,
  });

  res.send({url: session.url });
});

export default router;




















// import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config(); 

// let config = {
//     headers: {
//         Authorization: "Bearer " + process.env.CHAPA_SECRET_KEY,
//     }
// };

// const checkOut = async (req, res) => {
//     try {
//       //TODO: populate from DB
  
//       console.log(process.env.CHAPA_SECRET_KEY);
//       let tx_ref = `tx-myecommerce12345${Date.now()}`;
//       console.log(tx_ref);
  
//       let result = await axios.postForm(
//         "https://api.chapa.co/v1/transaction/initialize",
//         {
//           amount: req.body.total_price,
//           currency: "ETB",
//           email: req.body.email,
//           first_name: req.body.first_name,
//           last_name: req.body.last_name,
//           tx_ref: tx_ref,
//           callback_url: `http://localhost:5000/api/success?tx_ref=${tx_ref}`,
//           // "customization[title]": "I love e-commerce",
//           // "customization[description]": "It is time to pay",
//         },
//         config
//       );
//       console.log("result");
//       console.log(result.data);
//       //returning back the checkout url to Frontend
  
//       res.send(result.data);
//     } catch (error) {
//       console.log(error.data);
//       res.send("error message " + error);
//     }
//   };
  
//   export default checkOut;
// ############ PAYMENT BACKEND #########################