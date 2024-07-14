import * as React from 'react';
import type { PageComponentProps } from 'app';
import confetti from 'canvas-confetti';
import Button from './components/Button';

const settings = {
  particleCount: 3,
  scalar: 1.5,
  colors: ['#FFDE54', '#FF5A54', '#54FF90'],
  spread: 70,
};

function useConfetti() {
  React.useEffect(() => {
    const end = Date.now() + 1000;

    function frame() {
      confetti({
        ...settings,
        angle: 60,
        origin: { x: 0 },
      });
      confetti({
        ...settings,
        angle: 120,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        window.requestAnimationFrame(frame);
      }
    }

    frame();
  }, []);
}

const Thanks: React.FC<PageComponentProps> = ({ piral }) => {
  useConfetti();

  return (
    <div data-boundary-page="checkout">
      <piral.Extension name="header" />
      <main className="c_Thanks">
        <h2 className="c_Thanks__title">Thanks for your order!</h2>
        <p className="c_Thanks__text">We'll notify you, when its ready for pickup.</p>
        <Button href="/" variant="secondary">
          Continue Shopping
        </Button>
      </main>
      <piral.Extension name="footer" />
    </div>
  );
};

export default Thanks;
