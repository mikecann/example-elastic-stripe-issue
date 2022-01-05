import { Stripe } from "stripe";

export const initStripe = () =>
  new Stripe(
    `this doesnt matter for this demo, it still errors even with a valid key here`,
    { apiVersion: "2020-08-27" }
  );
