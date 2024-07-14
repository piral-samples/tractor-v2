import './css/index.css';
import * as React from 'react';
import type { PiletApi } from 'app';

const HomePage = React.lazy(() => import('./HomePage'));
const CategoryPage = React.lazy(() => import('./CategoryPage'));
const StoresPage = React.lazy(() => import('./StoresPage'));

const Recommendations = React.lazy(() => import('./Recommendations'));
const StorePicker = React.lazy(() => import('./StorePicker'));
const Header = React.lazy(() => import('./Header'));
const Footer = React.lazy(() => import('./Footer'));

export function setup(app: PiletApi) {
  app.registerPage('/', HomePage);
  app.registerPage('/products/:category?', CategoryPage);
  app.registerPage('/stores', StoresPage);

  app.registerExtension('recommendations', Recommendations);
  app.registerExtension('store-picker', StorePicker);
  app.registerExtension('header', Header);
  app.registerExtension('footer', Footer);
}
