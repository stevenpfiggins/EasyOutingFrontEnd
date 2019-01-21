export let Api_Url = '';

switch (window.location.hostname) {
  case 'easy-outings.herokuapp.com':

  Api_Url = 'https://easyoutings.azurewebsites.net'
  break;

  default:
  Api_Url = 'https://localhost:44311'
}

export const environment = {
  production: false
};