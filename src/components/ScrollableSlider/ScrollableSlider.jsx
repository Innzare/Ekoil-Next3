import React from 'react';
import './slider.css';

import Mers from '@/components/SvgIcons/Cars/mers';
import Bmw from '@/components/SvgIcons/Cars/bmw';
import Wolkswagen from '@/components/SvgIcons/Cars/wolkswagen';
import Fiat from '@/components/SvgIcons/Cars/fiat';
import Audi from '@/components/SvgIcons/Cars/audi';
import Toyota from '@/components/SvgIcons/Cars/toyota';
import Mitsubishi from '@/components/SvgIcons/Cars/mitsubishi';
import LandRover from '@/components/SvgIcons/Cars/landRover';
import Mazda from '@/components/SvgIcons/Cars/mazda';
import Lexus from '@/components/SvgIcons/Cars/lexus';

import Hyndai from '@/components/SvgIcons/Cars/hyndai';
import Lada from '@/components/SvgIcons/Cars/lada';
import Kia from '@/components/SvgIcons/Cars/kia';
import Ford from '@/components/SvgIcons/Cars/ford';
import Volvo from '@/components/SvgIcons/Cars/volvo';
import Renault from '@/components/SvgIcons/Cars/renault';
import Man from '@/components/SvgIcons/Cars/man';
import Infinity from '@/components/SvgIcons/Cars/infinity';
import Chery from '@/components/SvgIcons/Cars/chery';

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
            <Toyota />
          </div>
          <div className="item">
            <Mitsubishi />
          </div>
          <div className="item">
            <LandRover />
          </div>
          <div className="item">
            <Mazda />
          </div>
          <div className="item">
            <Lexus />
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
            <Toyota />
          </div>
          <div className="item">
            <Mitsubishi />
          </div>
          <div className="item">
            <LandRover />
          </div>
          <div className="item">
            <Mazda />
          </div>
          <div className="item">
            <Lexus />
          </div>
        </div>
      </div>

      <div class="marquee marquee--reverse">
        <div class="marquee__group">
          <div className="item">
            <Hyndai />
          </div>
          <div className="item">
            <Lada />
          </div>
          <div className="item">
            <Kia />
          </div>
          <div className="item">
            <Ford />
          </div>
          <div className="item">
            <Volvo />
          </div>
          <div className="item">
            <Renault />
          </div>
          <div className="item">
            <Man />
          </div>
          <div className="item">
            <Infinity />
          </div>
          <div className="item">
            <Chery />
          </div>
          <div className="item">
            <Lexus />
          </div>
        </div>

        <div aria-hidden="true" class="marquee__group">
          <div className="item">
            <Hyndai />
          </div>
          <div className="item">
            <Lada />
          </div>
          <div className="item">
            <Kia />
          </div>
          <div className="item">
            <Ford />
          </div>
          <div className="item">
            <Volvo />
          </div>
          <div className="item">
            <Renault />
          </div>
          <div className="item">
            <Man />
          </div>
          <div className="item">
            <Infinity />
          </div>
          <div className="item">
            <Chery />
          </div>
          <div className="item">
            <Lexus />
          </div>
        </div>
      </div>
    </article>
  );
}
