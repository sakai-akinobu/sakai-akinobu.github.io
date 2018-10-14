import React from 'react';

import styles from './styles.scss';

export default function Profile() {
  return (
    <section className={styles.container}>
      <img className={styles.avatar} src="/images/avatar.jpg" />
      <div>Akinobu Sakai</div>
    </section>
  );
}
