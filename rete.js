/* =========================================================================
   SERVER DI APPOGGIO (TURN) PER LA CONNESSIONE TELEFONO <-> COACH
   -------------------------------------------------------------------------
   Servono quando la rete (aziendale o dati mobili) blocca la connessione
   diretta: in quel caso i messaggi del quiz passano da qui, cifrati.
   Credenziali: account Metered, piano gratuito 500 MB/mese.
   Se cambi credenziale su Metered, sostituisci username e credential qui
   sotto e ricarica questo file su GitHub.
   ========================================================================= */
window.RETE_ICE = [
  { urls: "stun:stun.relay.metered.ca:80" },
  { urls: "stun:stun.l.google.com:19302" },
  {
    urls: "turn:global.relay.metered.ca:80",
    username: "3ea90209b3290147498a375a",
    credential: "EQHRVyEsGe+H41nX"
  },
  {
    urls: "turn:global.relay.metered.ca:80?transport=tcp",
    username: "3ea90209b3290147498a375a",
    credential: "EQHRVyEsGe+H41nX"
  },
  {
    urls: "turn:global.relay.metered.ca:443",
    username: "3ea90209b3290147498a375a",
    credential: "EQHRVyEsGe+H41nX"
  },
  {
    urls: "turns:global.relay.metered.ca:443?transport=tcp",
    username: "3ea90209b3290147498a375a",
    credential: "EQHRVyEsGe+H41nX"
  }
];
