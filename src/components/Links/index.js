import React from 'react';
import {
  FaGithub,
  FaNpm,
  FaInstagram,
  FaLastfm,
} from 'react-icons/fa';

import styles from './styles.scss';

const links = [
  {
    component: FaGithub,
    url: 'https://github.com/sakai-akinobu',
  },
  {
    component: FaNpm,
    url: 'https://www.npmjs.com/~sakai-akinobu',
  },
  {
    component: FaInstagram,
    url: 'https://www.instagram.com/sakai.akinobu/',
  },
  {
    component: FaLastfm,
    url: 'https://www.last.fm/ja/user/nobyu',
  },
];

export default function Links() {
  return (
    <section>
      <ul className={styles.links}>
        {links.map(({url, component}) => {
          const Component = component;
          return (
            <li>
              <a href={url}><Component /></a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
