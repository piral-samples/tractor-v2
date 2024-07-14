import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PageComponentProps } from 'app';
import data from './data/db.json';
import { src, srcset } from './js/utils';

const HomePage: React.FC<PageComponentProps> = ({ piral }) => {
  return (
    <div data-boundary-page="explore">
      <piral.Extension name="header" />
      <main className="e_HomePage">
        {data.teaser.map(({ title, image, url }, i) => (
          <Link key={i} className="e_HomePage__categoryLink" to={url}>
            <img
              src={src(image, 500)}
              srcSet={srcset(image, [500, 1000])}
              sizes="100vw, (min-width: 500px) 50vw"
              alt=""
            />
            {title}
          </Link>
        ))}
        <div className="e_HomePage__recommendations">
          <piral.Extension name="recommendations" params={{ skus: ['CL-01-GY', 'AU-07-MT'] }} />
        </div>
      </main>
      <piral.Extension name="footer" />
    </div>
  );
};

export default HomePage;
