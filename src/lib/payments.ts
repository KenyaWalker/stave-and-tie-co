/**
 * Optional Stripe Payment Link for deposits (e.g. returning clients after a proof).
 * Set NEXT_PUBLIC_STRIPE_DEPOSIT_URL in .env.local when you have a live link from Stripe Dashboard.
 */
export const STRIPE_DEPOSIT_URL =
  typeof process.env.NEXT_PUBLIC_STRIPE_DEPOSIT_URL === "string"
    ? process.env.NEXT_PUBLIC_STRIPE_DEPOSIT_URL.trim()
    : "";

export const hasStripeDepositLink = STRIPE_DEPOSIT_URL.length > 0;
