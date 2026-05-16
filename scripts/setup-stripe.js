import 'dotenv/config';
import Stripe from 'stripe';
import fs from 'fs';
import path from 'path';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_mock');

const ticketTiers = [
  {
    id: 'ga',
    name: 'General Admission',
    price: 15000, // $150.00
    description: 'Access to Gaming Tournament, Fireside Chat, and Match Viewing.'
  },
  {
    id: 'vip',
    name: 'VIP Lounge',
    price: 50000, // $500.00
    description: 'Premium lounge access, reserved seating, catering, and open bar.'
  },
  {
    id: 'family',
    name: 'Family Pass',
    price: 40000, // $400.00
    description: 'Covers 2 Adults and 2 Youth (Under 18).'
  },
  {
    id: 'youth',
    name: 'Youth (U18)',
    price: 7500, // $75.00
    description: 'Discounted entry for younger fans. Must be accompanied by an adult.'
  }
];

async function setupStripe() {
  const links = {};

  if (!process.env.STRIPE_SECRET_KEY) {
    console.warn('STRIPE_SECRET_KEY not found. Generating mock links.');
    ticketTiers.forEach(tier => {
      links[tier.id] = `https://checkout.stripe.com/pay/mock_${tier.id}`;
    });
  } else {
    try {
      for (const tier of ticketTiers) {
        console.log(`Creating/Updating Product: ${tier.name}`);
        const product = await stripe.products.create({
          name: tier.name,
          description: tier.description,
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: tier.price,
          currency: 'usd',
        });

        const paymentLink = await stripe.paymentLinks.create({
          line_items: [{ price: price.id, quantity: 1 }],
        });

        links[tier.id] = paymentLink.url;
      }
    } catch (error) {
      console.error('Error creating Stripe resources:', error.message);
      process.exit(1);
    }
  }

  const outputPath = path.join(process.cwd(), 'stripe-links.json');
  fs.writeFileSync(outputPath, JSON.stringify(links, null, 2));
  console.log(`Stripe links exported to ${outputPath}`);
}

setupStripe();
