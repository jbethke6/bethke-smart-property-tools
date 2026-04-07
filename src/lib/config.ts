export const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL || "https://n8n.srv1004859.hstgr.cloud/webhook/create-checkout";

export const STRIPE_PRICE_IDS = {
  bgf_base:  "price_1THoOVKkd3JgwKIbNiRzRrng",
  bgf_extra: "price_1THw9OKkd3JgwKIb0zEbgZ1z",
  dig_base:  "price_1THwJ1Kkd3JgwKIb2LtqfmLm",
  dig_extra: "price_1THwK4Kkd3JgwKIbqYHAsFqf",
};

export const BGF_PRICING = {
  basePrice: 2900,
  additionalFloor: 2000,
};

export const DIG_PRICING = {
  basePrice: 5900,
  additionalFloor: 4000,
};
