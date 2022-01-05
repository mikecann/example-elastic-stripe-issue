import { initElasticAPM } from "./apm";
import { initStripe } from "./stripe";

try {
  console.log(`initting APM..`);
  const apm = initElasticAPM();
  console.log(`APM Initted ${apm}`);

  console.log(`initting stripe...`);
  initStripe();
  console.log(`stripe initted`);
} catch (e) {
  console.error(e);
}
