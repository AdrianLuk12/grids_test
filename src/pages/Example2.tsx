import React, {useEffect, useRef} from 'react';
import GridStackExample2 from '../components/GridStackExample2';
import { Link } from 'react-router-dom';

interface Widget {
  id: string;
  content: React.ReactNode;
  w: number;
  h: number;
}

const widgets: Widget[] = [
  //{ id: 'giphy1', content: <iframe src="https://giphy.com/embed/QqnUsCKQOtR8SNv6Yn" width="100px" height="100px" title='giphy' loading="eager"></iframe>, w: 2, h: 2 },
  { id: 'pinterest', content: <iframe src="https://assets.pinterest.com/ext/embed.html?id=25192079159039233" scrolling="no" height="320px" width="236px" title='pinterest' loading="lazy"></iframe>, w: 4, h: 5 },
  { id: 'giphy2', content: <iframe src="https://giphy.com/embed/QqnUsCKQOtR8SNv6Yn" width="50px" height="50px" title='giphy' loading="eager" scrolling="no"></iframe>, w: 1, h: 1 },
  { id: 'spotify', content: <iframe src="https://open.spotify.com/embed/track/4U45aEWtQhrm8A5mxPaFZ7?utm_source=generator" width="400px" height="152px" frameBorder="0" allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title='spotify'></iframe>, w: 6, h: 3 },
  {
    id: 'soundcloud', content: <iframe width="266.666667px" height="100px" scrolling="no" title='soundcloud' loading="lazy"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/581478924&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>, w: 4, h: 2
  },
  {
    id: 'giphy3', content: <iframe src="https://giphy.com/embed/tkApIfibjeWt1ufWwj" width="120px" height="120px" frameBorder="0" allowFullScreen title='giphy'></iframe>, w: 2, h: 2
  },
  {
    id: 'youtube', content: <iframe width="240px" height="180px" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=oEqtTK8hgX36E-Xl&amp;controls=0" title="YouTube" frameBorder="0" allowFullScreen></iframe>, w: 4, h: 3
  },
  {
    id: 'tiktok', content: <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@taylorswift/video/7258345181743828267" data-video-id="7258345181743828267" style={{maxWidth: '350px', minWidth: '325px', maxHeight: '575px'}}> <section> <a target="_blank" title="@taylorswift" href="https://www.tiktok.com/@taylorswift?refer=embed">@taylorswift</a> <p>Summer forecast: Cruel. 😎</p> <a target="_blank" title="♬ Cruel Summer - Taylor Swift" href="https://www.tiktok.com/music/Cruel-Summer-7211414788142794754?refer=embed">♬ Cruel Summer - Taylor Swift</a> </section> </blockquote>, w: 5, h:9
  },
  {
    id: 'twitter', content: <div style={{width: '260px', height: '360px'}}><blockquote className="twitter-tweet"><p lang="und" dir="ltr">GG <a href="https://t.co/VfuLrZrmuf">pic.twitter.com/VfuLrZrmuf</a></p>&mdash; TenZ (@TenZOfficial) <a href="https://twitter.com/TenZOfficial/status/1787286416571171039?ref_src=twsrc%5Etfw">May 6, 2024</a></blockquote></div>, w: 4, h: 6
  },
  {
    id: 'reddit', content: <div style={{width: '240px', height: '380px'}}><blockquote className="reddit-embed-bq" data-embed-height="240" >Posts from the <a href="https://www.reddit.com/r/VALORANT/comments/1e53afr/my_friend_loves_iso_and_ice_cream_so_i_drew/">valorant</a><br></br> community on Reddit</blockquote></div>, w: 4, h: 6
  },
  {
    id: 'discord', content: <iframe src="https://discord.com/widget?id=1262976182295466037&theme=dark" width="240" height="240" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" loading='lazy'></iframe>, w: 4, h: 4
  },
  {
    id: 'tumblr', content: <div style={{width: '240px', height: '430px'}}> <div className="tumblr-post" data-href="https://embed.tumblr.com/embed/post/t:9YbgtOEt00SZYLnL6ivDJw/756169968615358464/v2" data-did="8124985aed350d0efbfc94cf5e9126534a29586e"><a href="https://www.tumblr.com/dragoncuspid/756169968615358464/just-found-out-about-the-hog-badger-i-love">https://www.tumblr.com/dragoncuspid/756169968615358464/just-found-out-about-the-hog-badger-i-love</a></div></div>, w: 4, h: 6
  },
];


const Example2: React.FC = () => {

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptSources = [
      'https://www.tiktok.com/embed.js',
      'https://platform.twitter.com/widgets.js',
      'https://embed.reddit.com/widgets.js',
      'https://assets.tumblr.com/post.js'
    ];
  
    const scripts:any[] = [];
  
    for (const src of scriptSources) {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
  
      const container = containerRef.current;
      if (container) {
        container.appendChild(script);
        scripts.push(script);
      }
    }
  
    return () => {
      const container = containerRef.current;
      if (container) {
        scripts.forEach(script => {
          if (container.contains(script)) {
            container.removeChild(script);
          }
        });
      }
    };
  }, []);

  return (
    <div ref={containerRef}>
      <ul style={{ display: 'inline-block' }}>
        {widgets.map((widget) => (
          <li key={widget.id}>            
            <div
              className="grid-stack-item newWidget"
              gs-w={widget.w}
              gs-h={widget.h}
              //style={{width: widget.w * 68.3335 + 20, height: widget.h * 68.3335 + 10}}
            >              
              <div className="grid-stack-item-content" >{widget.content}</div>
            </div>
          </li>
        ))}
      </ul>

      {/*

      <ul style={{ display: 'inline-block' }}>
        <li>
          <div className="grid-stack-item newWidget" gs-w="2" gs-h="2" style={{ width: "120px" }}>
            <div className="grid-stack-item-content">

              <iframe src="https://giphy.com/embed/QqnUsCKQOtR8SNv6Yn" width="100px" height="100px" title='giphy'></iframe>

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
                <iframe src="https://open.spotify.com/embed/track/4U45aEWtQhrm8A5mxPaFZ7?utm_source=generator" width="300" height="152" frameBorder="0" allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="eager" title='spotify'></iframe>
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

      */}

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