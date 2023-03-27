import fs from "fs";
import https from "https";
import requestPromise from "request-promise";

const certBasePath = '/etc/pki/tls';

function getDefaults() {
  const ca = fs.readFileSync(`${certBasePath}/certs/ca-bundle.crt`);
  const cert = fs.readFileSync(`${certBasePath}/certs/client.crt`);
  const key = fs.readFileSync(`${certBasePath}/private/client.key`);

  return {
    cert,
    key,
    ca: [ca],
    rejectUnauthorized: true,
    secureProtocol: "TLSv1_2_method",
    headers: {
      "User-Agent": "WeatherWebComponentPoller/1.0",
    },
    agentClass: https.Agent,
    pool: {
      maxSockets: 25,
    },
  };
}

const request = requestPromise.defaults(getDefaults());

export { request };
