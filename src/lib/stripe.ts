import { loadStripe } from "@stripe/stripe-js";

const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "pk_test_51THiSFKkd3JgwKIbVzZ2rMlB0IOy4hbgvgGWPoPK5QLxrbr1FTYbHxiGvkaIKmh7O2rSN1dBZfKO1OigLuTEKvkE0068cS09Px";

export const stripePromise = loadStripe(publishableKey);
