import React from 'react';

import './Anime.css';

import anime from 'animejs';
import N1 from './n-1';
import O1 from './o-1';
import C from './c';
import K from './k';
import S from './s';
import UnderBar from './_';
import N2 from './n-2';
import O2 from './o-2';

class Anime extends React.Component {
  render() {
    return (
      <div>
        <div id="wrap">
          {/* <div className="box group1">
          </div> */}
          <div id="svg" className="svg">
            <N1 />
            <O1 />
            <C />
            <K />
            <S />
            <UnderBar />
            <O2 />
            <N2 />
          </div>
        </div>
      </div>
    )
  }
}

const animation = () => {
  console.log('anime start')

  let outlines = document.querySelectorAll<SVGElement>('#svg .outline path');
  for (let i = 0; i < outlines.length; i++) {
    let el : SVGElement = outlines[i];
    el.setAttribute('stroke-dashoffset', String(anime.setDashoffset(el)));
  }

  let timeline : anime.AnimeTimelineInstance = anime.timeline({
    loop: true
  });

  timeline
    .add({
      targets: '#svg .fill path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutQuad',
      duration: 500,
      delay: (el, i) => {return i*250},
    })
    .add({
      targets: '#svg .outline path',
      strokeDashoffset: 0,
      easing: 'easeInOutQuad',
      duration: 1,
    })
    .add({
      targets: '#svg .fill path',
      strokeDashoffset: [0, anime.setDashoffset],
      easing: 'easeInOutQuad',
      duration: 500,
      delay: (el, i) => {return i*250},
    })
    .add({
      targets: '#svg .outline path',
      strokeDashoffset: [0, anime.setDashoffset],
      easing: 'easeInOutQuad',
      duration: 500,
      delay: (el, i) => {return i*250},
    }, '-=500')
}

window.onload = animation;

export default Anime;