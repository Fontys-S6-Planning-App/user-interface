import { KeycloakConfig} from 'keycloak-js';

const keycloakConfig: KeycloakConfig = {
  url: 'https://keycloak.marktempelman.duckdns.org/auth/',
  realm: 'Planning App',
  clientId: 'angular-web-client',
};

export default keycloakConfig;
