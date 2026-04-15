export const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL || "https://n8n.srv1004859.hstgr.cloud/webhook/create-checkout";

export const STRIPE_PRICE_IDS = {
  bgf_base:  "price_1TMSrJ3DXOt9kCH4KtReBpjV",
  bgf_extra: "price_1TMSrL3DXOt9kCH4pTAnvONw",
  dig_base:  "price_1TMSrM3DXOt9kCH4cw6T7VFs",
  dig_extra: "price_1TMSrO3DXOt9kCH4iSsFOoP4",
};

export const BGF_PRICING = {
  basePrice: 2900,
  additionalFloor: 2000,
};

export const DIG_PRICING = {
  basePrice: 5900,
  additionalFloor: 4000,
};
