import React from 'react';
import { useState } from 'react';
// import Directory from '../../components/directory/directory.component';

import './homepage.styles.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [spinner, setSpinner] = useState();
  const [angle, setAngle] = useState(0);

  const spin = (sign) => {
    console.log(spinner);
    if (!sign) {
      setAngle(angle + 45);
    } else {
      setAngle(angle - 45);
    }
    setSpinner({ transform: `rotateY( ${angle}deg)` });
  };
  return (
    <div className='homepage'>
      <div id='carousel'>
        <figure id='spinner' style={spinner}>
          <img
            src='https://s22867.pcdn.co/wp-content/uploads/2018/09/SalomonQSTPro.png'
            alt='hhu'
          />

          <img
            src='https://cdn.shopify.com/s/files/1/0019/6768/5745/products/skishoes-mini-skis-shoe-attachment-neesglobal-attach-right-to-your-winter-shoes-or-snowboard-boots-best-gifts-combination-of-and-skates-gadgets-consumer-goods_579.jpg'
            alt='hhu'
          />
          <img
            src='https://www.snowinn.com/f/13727/137278183/atomic-vantage-x-80-cti-ft-12-gw-f80.jpg'
            alt='hhu'
          />
          <img
            src='https://images.evo.com/imgp/700/181296/741560/burton-ripcord-snowboard-2021-.jpg'
            alt='hhu'
          />
          <img
            src='https://s22867.pcdn.co/wp-content/uploads/2018/09/FullTiltAscendant.png'
            alt='hhu'
          />
          <img
            src='https://images.evo.com/imgp/700/185041/741256/never-summer-proto-slinger-snowboard-2021-.jpg'
            alt='hhu'
          />
          <img
            src='https://s22867.pcdn.co/wp-content/uploads/2018/09/FullTiltAscendant.png'
            alt='hhu'
          />
          <img
            src='https://images.evo.com/imgp/700/185041/741256/never-summer-proto-slinger-snowboard-2021-.jpg'
            alt='hhu'
          />
        </figure>
      </div>
      <span
        style={{ float: 'left' }}
        className='ss-icon'
        onClick={() => spin()}
      >
        &lt;
      </span>
      <span
        style={{ float: 'right' }}
        className='ss-icon'
        onClick={() => spin('-')}
      >
        &gt;
      </span>
    </div>
  );
};
export default HomePage;
