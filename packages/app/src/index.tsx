import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Route } from 'react-router-dom';
import { createInstance, Piral } from 'piral-core';
import { ScrollToTop } from './ScrollToTop';
import { layout, errors } from './layout';

const feedUrl = 'https://feed.piral.cloud/api/v1/pilet/tractor-v2-demo';
const root = createRoot(document.querySelector('#app'));

const instance = createInstance({
  state: {
    components: layout,
    errorComponents: errors,
  },
  plugins: [],
  requestPilets() {
    return fetch(feedUrl)
      .then((res) => res.json())
      .then((res) => res.items);
  },
});

root.render(
  <Piral instance={instance}>
    <Route component={ScrollToTop} />
  </Piral>,
);
