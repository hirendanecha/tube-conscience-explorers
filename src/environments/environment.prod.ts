const loginUrl = 'https://conscienceexplorers.com/login';
const logoutUrl = 'https://conscienceexplorers.com/logout';
const frontendUrl = 'https://tube.conscienceexplorers.com/';
const backendUrl = 'https://api.conscienceexplorers.com/';

// const frontendUrl = 'http://localhost:4200/';
// const backendUrl = 'http://localhost:8080/';
// const loginUrl = 'http://localhost:4200/login';
const wasabiUrl = 'https://conscience-explorers.s3.wasabisys.com/'


export const environment = {
  production: false,
  frontendUrl: frontendUrl,
  backendUrl: backendUrl,
  loginUrl: loginUrl,
  apiUrl: `${backendUrl}api/v1/`,
  domain: '.conscienceexplorers.com',
  wasabiUrl: wasabiUrl,
  socketUrl: `${backendUrl}`,
  conferenceUrl: 'https://meet.facetime.tube/',
  logoutUrl: logoutUrl

};

