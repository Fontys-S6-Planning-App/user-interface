import { KeycloakConfig} from 'keycloak-js';

const keycloakConfig: KeycloakConfig = {
  url: 'https://keycloak.marktempelman.duckdns.org/auth/',
  realm: 'planning-app',
  clientId: 'angular-web-client',
};

export default keycloakConfig;
