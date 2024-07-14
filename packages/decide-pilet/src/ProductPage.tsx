import * as React from 'react';
import { useHistory } from 'react-router-dom';
import type { PageComponentProps } from 'app';
import VariantOption from './components/VariantOption';
import data from './data/db.json';
import { src, srcset } from './js/utils';

function useSku() {
  const [sku, setSku] = React.useState(() => new URL(location.href).searchParams.get('sku'));
  const history = useHistory();

  return [
    sku,
    (val: string) => {
      history.replace(`?sku=${val}`);
      setSku(val);
    },
  ] as const;
}

const ProductPage: React.FC<PageComponentProps<{ id: string }>> = ({
  piral,
  match: {
    params: { id },
  },
}) => {
  const [sku, setSku] = useSku();
  const { name, variants, highlights = [] } = data.products.find((p) => p.id === id);
  const variant = variants.find((v) => v.sku === sku) || variants[0];

  const handleSkuSelect = (ev: React.MouseEvent) => {
    const attr = (ev.target as HTMLElement).getAttribute('href');

    if (attr) {
      const val = attr.substring(attr.indexOf('?sku=') + 5);
      setSku(val);
    }
  };

  return (
    <div data-boundary-page="decide">
      <piral.Extension name="header" />
      <main className="d_ProductPage">
        <div className="d_ProductPage__details">
          <img
            className="d_ProductPage__productImage"
            src={src(variant.image, 400)}
            srcSet={srcset(variant.image, [400, 800])}
            sizes="400px"
            width="400"
            height="400"
            alt={`${name} - ${variant.name}`}
          />
          <div className="d_ProductPage__productInformation">
            <h2 className="d_ProductPage__title">{name}</h2>
            <ul className="d_ProductPage__highlights">
              {highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
            <ul className="d_ProductPage__variants" onClick={handleSkuSelect}>
              {variants.map((v, i) => (
                <VariantOption key={i} {...{ ...v, selected: v.sku === variant.sku }} />
              ))}
            </ul>
            <piral.Extension name="add-to-cart" params={{ sku: variant.sku }} />
          </div>
        </div>
        <piral.Extension name="recommendations" params={{ skus: [variant.sku] }} />
      </main>
      <piral.Extension name="footer" />
    </div>
  );
};

export default ProductPage;
