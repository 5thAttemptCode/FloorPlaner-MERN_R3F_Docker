// controllers/paymentControllers.js
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Controller for creating a payment intent
const createPaymentIntent = async (req, res) => {
  try {
    const { amount } = req.body; // Expect amount to be sent in request body
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // Amount should be in the smallest currency unit (e.g., cents for USD)
      currency: 'usd',
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createPaymentIntent };
