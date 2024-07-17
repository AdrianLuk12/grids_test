import React from 'react';
import GridStackExample2 from '../components/GridStackExample2';
import { Link } from 'react-router-dom';

const Example2: React.FC = () => {
  return (
    <div>
      <ul style={{ display: 'inline-block' }}>
        <li>
          <div className="grid-stack-item newWidget" gs-w="2" gs-h="2" style={{ width: "120px" }}>
            <div className="grid-stack-item-content">
              <div>
                <iframe src="https://giphy.com/embed/QqnUsCKQOtR8SNv6Yn" width="100px" height="100px" title='giphy'></iframe>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="grid-stack-item newWidget" gs-w="4" gs-h="5" style={{ width: "260px" }}>
            <div className="grid-stack-item-content">
              <div>
                <iframe src="https://assets.pinterest.com/ext/embed.html?id=25192079159039233" scrolling="no" height="320px" width="236px" title='pinterest'></iframe>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="grid-stack-item newWidget" gs-w="1" gs-h="1" style={{ width: "60px" }}>
            <div className="grid-stack-item-content">
              <div>
                <iframe src="https://giphy.com/embed/QqnUsCKQOtR8SNv6Yn" width="50px" height="50px" title='giphy'></iframe>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="grid-stack-item newWidget" gs-w="5" gs-h="3" style={{ width: "300px" }}>
            <div className="grid-stack-item-content">
              <div>
                <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/4U45aEWtQhrm8A5mxPaFZ7?utm_source=generator" width="300" height="152" frameBorder="0" allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title='spotify'></iframe>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="grid-stack-item newWidget" gs-w="4" gs-h="2" style={{ width: "240px" }}>
            <div className="grid-stack-item-content">
              <div>
                <iframe width="200px" height="100px" scrolling="no" title='soundcloud'
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/581478924&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

              </div>
            </div>
          </div>
        </li>
      </ul>


      <div className='xyz'>
        <GridStackExample2 />
      </div>

      <div id="trash">
        <span style={{ fontSize: "40px" }}>Trash🗑️</span>
      </div>

      <Link to="/" style={{ display: 'inline-block' }}>
        <button className='button-6'>Back to Home</button>
      </Link>
    </div>
  );
};

export default Example2;