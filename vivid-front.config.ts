// Example configuration file for fake-api (TypeScript)
// Export a typed config object. This is for reference; the library's bundler helper expects a JS (.cjs or .js) at build time.

import type { VividFrontConfig } from '@vivid-front/commons';

const config: VividFrontConfig = {
  port: 5000,
  apiDir: 'api',
  collectionsDir: 'collections',
  wildcardChar: '_',
  // Choose which route file extension to map: 'js' or 'ts'
  routeFileExtension: 'js',
  http: {
    endpoints: {
      'api-server': {
        // development has no baseUrl; plugin will compute http://localhost:PORT
        staging: { baseUrl: 'https://staging.example.com' },
        production: { baseUrl: 'https://api.example.com' },
        'my-custom-env': { baseUrl: 'https://api.example.com' },
      },
    },
  },
};

export default config;
