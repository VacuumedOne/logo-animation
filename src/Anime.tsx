import React from 'react';

import './Anime.css';

import anime from 'animejs';
import N from './n';
import O from './o';
import C from './c';
import K from './k';
import S from './s';
import _ from './_';

class Anime extends React.Component {
  render() {
    return (
      <div>
        <div id="wrap">
          <div className="box group1">
          </div>
          <div id="nSVG" className="svg">
            <N />
            <O />
            <C />
            <K />
            <S />
            <_ />
          </div>
        </div>
      </div>
    )
  }
}

const animation = () => {
  console.log('anime start')

  anime({
    targets: '#nSVG .fill path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutQuad',
    duration: 500,
    delay: (el, i) => {return i*250},
    loop: true
  })
}

window.onload = animation;

export default Anime;