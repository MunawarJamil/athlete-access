import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: 'Missing Stripe secret key' },
      { status: 500 }
    );
  }

  try {
    const { items } = await request.json();

    console.log( "here is cart data " , items);
    

    // Validate items
    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'Invalid items data' },
        { status: 400 }
      );
    }

    // Create line items for Stripe
    const lineItems = items.map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.title,
          
        },
        unit_amount: Math.round(item.price * 100), // Convert to cents
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_DOMAIN}/cancel`,
    });

    return NextResponse.json({ url: session.url });
    
  } catch (error) {
    console.error('Stripe session creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}