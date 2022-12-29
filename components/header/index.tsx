import styles from './index.module.css';
import Image from 'next/image';
import Head from 'next/head';
import WebHeader from './web';
const Header = () => {
  return (
    <>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/fav/apple-touch-icon.png'
          key='applefav'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/fav/favicon-32x32.png'
          key='fav32'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/fav/favicon-16x16.png'
          key='fav16'
        />
        <link rel='manifest' href='/fav/site.webmanifest' key='manifest' />
        {/* <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" key='maskicon'/> */}
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <div className={styles.headerRow}>
        <div className={styles.headerContainer}>
          <WebHeader />
        </div>
      </div>
    </>
  );
};
export default Header;
