import * as React from 'react';
import type { PageComponentProps } from 'app';
import data from './data/db.json';
import Store from './components/Store';

const StoresPage: React.FC<PageComponentProps> = ({ piral }) => {
  return (
    <div data-boundary-page="explore">
      <piral.Extension name="header" />
      <main className="e_StoresPage">
        <h2>Our Stores</h2>
        <p>
          Want to see our products in person? Visit one of our stores to see our products up close and talk to our
          experts. We have stores in the following locations:
        </p>
        <ul className="e_StoresPage_list">
          {data.stores.map((store, i) => (
            <Store key={i} {...store} />
          ))}
        </ul>
      </main>
      <piral.Extension name="footer" />
    </div>
  );
};

export default StoresPage;
