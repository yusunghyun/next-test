import type { NextPage } from 'next';
import Link from 'next/link';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

const Home: NextPage = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Header />
      <Link href='/about'>
        <a>About Page</a>
      </Link>
      <p>Hello Next.js</p>
    </div>
  );
};

export default Home;
