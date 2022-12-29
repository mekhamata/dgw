import styles from './index.module.css';
import Image from 'next/image';
import NavLink from '../../NavLink';
const WebHeader = () => {
  return (
    <div className={styles.webHeaderContainer}>
      <div className={styles.webLogo}>
        <Image
          alt='page cover'
          src='/logo3.png'
          width={192}
          height={50}
          objectFit='scale-down'
        />
      </div>
      <div className={styles.menuContainer}>
        <nav>
          <ul>
            <li>
              <NavLink
                href='/'
                className='text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out'
                activeClassName='text-xl text-sky-500'
                title='ראשי'
              />
            </li>
            <li>
              <NavLink
                href='/about'
                className='text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out'
                activeClassName='text-xl text-sky-500'
                title='אודות'
              />
            </li>
            <li>
              <NavLink
                href='/3'
                className='text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out'
                activeClassName='text-xl text-sky-500'
                title='שירותים'
              />
            </li>
            <li>
              <NavLink
                href='/4'
                className='text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out'
                activeClassName='text-xl text-sky-500'
                title='פרוייקטים'
              />
            </li>
            <li>
              <NavLink
                href='/5'
                className='text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out'
                activeClassName='text-xl text-sky-500'
                title='דרושים'
              />
            </li>
            <li>
              <NavLink
                href='/6'
                className='text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out'
                activeClassName='text-xl text-sky-500'
                title='צור קשר'
              />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default WebHeader;
