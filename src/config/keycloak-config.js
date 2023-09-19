var session = require("express-session");
var Keycloak = require("keycloak-connect");

let _keycloak;

var keycloakConfig = {
  clientId: "nodejs-microservice",
  bearerOnly: true,
  serverUrl: "http://localhost:8080/auth",
  realm: "Demo-Realm",
  credentials: {
    secret: "3AR2yjgeIW7yLq113uo9lDxFYsIGSWAL",
  },
  realmPublicKey:
    "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtlj0L/0ivktNR7Fgz59D2koF2vGQxf8SzD+xLQHEwrEV7UFGGkZpm9qOCliQ5LjFnvjjqAY5eq1jmw2x3sNJcEj85W1IhD3bjGu6+v2OzSV+cLA6Gdv+/V6MCefQu8cEx1trv92zMMgoLL6Et6a4nJyMUqjDNHZhapql+dEtVFatyuHFMP6vkzkr58Fb+YjGxIqvZdwH56s//d2Xs1Zo0w9/Wd2YsL9Yac8AesstLcjjFf1AUF8ldiKOPxSdS00JnGfez0y/wplXfr45d6NUQUc4KLmyfetVTl+KPhtFIxkNmnsM1BTcGiUzV7HwjCUyItl60dDnEPvQ2cf+xIqssQIDAQAB",
};

function initKeycloak(memoryStore) {
  if (_keycloak) {
    console.warn("Trying to init Keycloak again!");
    return _keycloak;
  } else {
    console.log("Initializing Keycloak...");
    // var memoryStore = new session.MemoryStore();
    _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
    return _keycloak;
  }
}

function getKeycloak() {
  if (!_keycloak) {
    console.error(
      "Keycloak has not been initialized. Please called init first."
    );
  }
  return _keycloak;
}

module.exports = { initKeycloak, getKeycloak };
