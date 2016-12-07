import Home from './components/home';
import About from './components/about';

export default function (injectDeps, { configs }) {
  const routes = {
    '/': [
      {path: 'home', component: Home},
      {path: 'about', component: About}
    ]
  };

  return routes;
}
