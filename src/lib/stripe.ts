import { loadStripe } from "@stripe/stripe-js";

const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "pk_live_51THiS23DXOt9kCH4F8ylZYk5UVsHKOvwNOWRpVFBKQpryscStfzCPMketUvS6pSKEDYg01Q7dMut7QtLtREpfhma00Ja64LNBO";

export const stripePromise = loadStripe(publishableKey);
