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
      setAngle(angle + 60);
    } else {
      setAngle(angle - 60);
    }
    setSpinner({ transform: `rotateY( ${angle}deg)` });
  };
  return (
    <div className='homepage'>
      <div id='carousel'>
        <figure id='spinner' style={spinner}>
          <Link to='/shop'>
            <img
              src='https://s22867.pcdn.co/wp-content/uploads/2018/09/SalomonQSTPro.png'
              alt='hhu'
            />
          </Link>
          <img
            src='https://cdn.shopify.com/s/files/1/0019/6768/5745/products/skishoes-mini-skis-shoe-attachment-neesglobal-attach-right-to-your-winter-shoes-or-snowboard-boots-best-gifts-combination-of-and-skates-gadgets-consumer-goods_579.jpg'
            alt='hhu'
          />
          <img
            src='https://s22867.pcdn.co/wp-content/uploads/2018/09/SalomonQSTPro.png'
            alt='hhu'
          />
          <img
            src='https://cdn.shopify.com/s/files/1/0019/6768/5745/products/skishoes-mini-skis-shoe-attachment-neesglobal-attach-right-to-your-winter-shoes-or-snowboard-boots-best-gifts-combination-of-and-skates-gadgets-consumer-goods_579.jpg'
            alt='hhu'
          />
          <img
            src='https://s22867.pcdn.co/wp-content/uploads/2018/09/SalomonQSTPro.png'
            alt='hhu'
          />
          <img
            src='https://cdn.shopify.com/s/files/1/0019/6768/5745/products/skishoes-mini-skis-shoe-attachment-neesglobal-attach-right-to-your-winter-shoes-or-snowboard-boots-best-gifts-combination-of-and-skates-gadgets-consumer-goods_579.jpg'
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
