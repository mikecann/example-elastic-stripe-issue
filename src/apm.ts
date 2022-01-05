import apm from "elastic-apm-node";


export const initElasticAPM = (): apm.Agent => {
  const options: apm.AgentConfigOptions = {
    serviceName: `Test`,
    secretToken: process.env.ELASTIC_APM_SECRET_TOKEN,
    serverUrl: process.env.ELASTIC_APM_SERVER_URL,
    environment: `local`,
    disableInstrumentations: [`http`, `https`, `http2`],
    instrumentIncomingHTTPRequests: false,
    //instrument: false,
    //captureSpanStackTraces: false,
    //stackTraceLimit: 20,
    //asyncHooks: false,
  };
  return apm.start(options);
};
