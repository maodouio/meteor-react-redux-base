import MainPage from './containers/mainPage';

export default function (injectDeps, { configs }) {
  return {
    '/admin': ['singlePages'],

    // insert routes for other layouts here
    '/': [
      {path: '/', component: MainPage} 
    ]
  };
}
