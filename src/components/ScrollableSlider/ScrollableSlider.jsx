import React from 'react';
import './slider.css';

import Mers from '@/components/SvgIcons/Cars/mers';
import Bmw from '@/components/SvgIcons/Cars/bmw';
import Wolkswagen from '@/components/SvgIcons/Cars/wolkswagen';
import Fiat from '@/components/SvgIcons/Cars/fiat';
import Audi from '@/components/SvgIcons/Cars/audi';

export default function ScrollableSlider() {
  return (
    <article class="wrapper">
      <div class="marquee">
        <div class="marquee__group">
          <div className="item">
            <Mers />
          </div>
          <div className="item">
            <Bmw />
          </div>
          <div className="item">
            <Wolkswagen />
          </div>
          <div className="item">
            <Fiat />
          </div>
          <div className="item">
            <Audi />
          </div>
          <div className="item">
            <Mers />
          </div>
          <div className="item">
            <Bmw />
          </div>
          <div className="item">
            <Wolkswagen />
          </div>
          <div className="item">
            <Fiat />
          </div>
          <div className="item">
            <Audi />
          </div>
        </div>

        <div aria-hidden="true" class="marquee__group">
          <div className="item">
            <Mers />
          </div>
          <div className="item">
            <Bmw />
          </div>
          <div className="item">
            <Wolkswagen />
          </div>
          <div className="item">
            <Fiat />
          </div>
          <div className="item">
            <Audi />
          </div>
          <div className="item">
            <Mers />
          </div>
          <div className="item">
            <Bmw />
          </div>
          <div className="item">
            <Wolkswagen />
          </div>
          <div className="item">
            <Fiat />
          </div>
          <div className="item">
            <Audi />
          </div>
        </div>
      </div>

      <div class="marquee marquee--reverse">
        <div class="marquee__group">
          <div className="item">
            <Mers />
          </div>
          <div className="item">
            <Bmw />
          </div>
          <div className="item">
            <Wolkswagen />
          </div>
          <div className="item">
            <Fiat />
          </div>
          <div className="item">
            <Audi />
          </div>
          <div className="item">
            <Mers />
          </div>
          <div className="item">
            <Bmw />
          </div>
          <div className="item">
            <Wolkswagen />
          </div>
          <div className="item">
            <Fiat />
          </div>
          <div className="item">
            <Audi />
          </div>
        </div>

        <div aria-hidden="true" class="marquee__group">
          <div className="item">
            <Mers />
          </div>
          <div className="item">
            <Bmw />
          </div>
          <div className="item">
            <Wolkswagen />
          </div>
          <div className="item">
            <Fiat />
          </div>
          <div className="item">
            <Audi />
          </div>
          <div className="item">
            <Mers />
          </div>
          <div className="item">
            <Bmw />
          </div>
          <div className="item">
            <Wolkswagen />
          </div>
          <div className="item">
            <Fiat />
          </div>
          <div className="item">
            <Audi />
          </div>
        </div>
      </div>
    </article>
  );
}
