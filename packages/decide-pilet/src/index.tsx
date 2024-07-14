import './css/index.css';
import * as React from 'react';
import type { PiletApi } from 'app';

const ProductPage = React.lazy(() => import('./ProductPage'));

export function setup(app: PiletApi) {
  app.registerPage('/product/:id', ProductPage);
}
