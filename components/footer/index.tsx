import styles from './index.module.css';
import ContainerCom from '../container';
import React, { useState } from 'react';
import NavLink from '../NavLink';
import IconComponent from '../iconComponent';
const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerDiv}>
        <div className={styles.footerMenu}>
          <div className={`${styles.footerMenuItemContainer}`}>
            <div className='hidden sm:block'>
              <div
                className={`${styles.footerMenuItemTitle} text-sky-900 text-xl border-b-2 border-sky-500 my-1`}
              >
                מי אנחנו
              </div>
              <div className={`${styles.footerMenuItemList} text-sky-900`}>
                סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט -
                לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה.
                לפמעט מוסן מנת. קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח.
                עמחליף נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר
                מודוף.
              </div>
              <div className={`${styles.footerMenuItemList} text-sky-900`}>
                <ul className='flex align-center justify-start gap-2 mt-2'>
                  <li>
                    <NavLink
                      href='/'
                      className='text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out'
                      activeClassName='text-sky-500'
                    >
                      <IconComponent
                        name='square-facebook'
                        type='fab'
                        className='text-3xl'
                      />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href='/1'
                      className='text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out'
                      activeClassName='text-sky-500'
                    >
                      <IconComponent
                        name='square-instagram'
                        type='fab'
                        className='text-3xl'
                      />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href='/1'
                      className='text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out'
                      activeClassName='text-sky-500'
                    >
                      <IconComponent
                        name='square-whatsapp'
                        type='fab'
                        className='text-3xl'
                      />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.footerMenuItemContainer}>
            <div
              className={`${styles.footerMenuItemTitle} text-sky-900 text-xl border-b-2 border-sky-500 my-1`}
            >
              מפת החברה
            </div>
            <div className={`${styles.footerMenuItemList}`}>
              <ul>
                <li>
                  <NavLink
                    href='/'
                    className='text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out'
                    activeClassName='text-sky-500'
                  >
                    ראשי
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href='/1'
                    className='text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out'
                    activeClassName='text-sky-500'
                  >
                    ראשי
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href=''
                    className='text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out'
                    activeClassName='text-sky-500'
                  >
                    ראשי
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href=''
                    className='text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out'
                    activeClassName='text-sky-500'
                  >
                    ראשי
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href=''
                    className='text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out'
                    activeClassName='text-sky-500'
                  >
                    ראשי
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footerMenuItemContainer}>
            <div className='hidden sm:block'>
              <div
                className={`${styles.footerMenuItemTitle} text-sky-900 text-xl border-b-2 border-sky-500 my-1`}
              >
                שירותים
              </div>
              <div className={`${styles.footerMenuItemList}`}>
                <ul>
                  <li>
                    <NavLink
                      href='/'
                      className='text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out'
                      activeClassName='text-sky-500'
                    >
                      ראשי
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href='/1'
                      className='text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out'
                      activeClassName='text-sky-500'
                    >
                      ראשי
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href=''
                      className='text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out'
                      activeClassName='text-sky-500'
                    >
                      ראשי
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href=''
                      className='text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out'
                      activeClassName='text-sky-500'
                    >
                      ראשי
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href=''
                      className='text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out'
                      activeClassName='text-sky-500'
                    >
                      ראשי
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.footerMenuItemContainer}>
            <div
              className={`${styles.footerMenuItemTitle} text-sky-900 text-xl border-b-2 border-sky-500 my-1`}
            >
              צרו קשר
            </div>
            <div className={`${styles.footerMenuItemList}`}>
              <form
                // onSubmit={handleSubmit}
                className='rounded-lg flex flex-col bg-white dark:bg-blue-500'
              >
                <label
                  htmlFor='fullname'
                  className='text-sky-900 font-light dark:text-gray-50'
                >
                  שם מלא
                  <span className='text-red-500 dark:text-gray-50'>*</span>
                </label>
                <input
                  type='text'
                  // value={fullname}
                  // onChange={(e) => {
                  //   setFullname(e.target.value);
                  // }}
                  name='fullname'
                  className='bg-transparent border-b text-sm py-1 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-sky-500 font-light text-sky-500'
                />

                <label
                  htmlFor='email'
                  className='text-sky-900 font-light mt-4 dark:text-gray-50'
                >
                  דוא״ל<span className='text-red-500'>*</span>
                </label>
                <input
                  type='email'
                  name='email'
                  // value={email}
                  // onChange={(e) => {
                  //   setEmail(e.target.value);
                  // }}
                  className='bg-transparent border-b text-sm py-1 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-sky-500 font-light text-sky-500'
                />

                <label
                  htmlFor='subject'
                  className='text-sky-900 font-light mt-4 dark:text-gray-50'
                >
                  נושא<span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  name='subject'
                  // value={subject}
                  // onChange={(e) => {
                  //   setSubject(e.target.value);
                  // }}
                  className='bg-transparent border-b text-sm py-1 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-sky-500 font-light text-sky-500'
                />

                <label
                  htmlFor='message'
                  className='text-sky-900 font-light mt-4 dark:text-gray-50'
                >
                  הודעה<span className='text-red-500'>*</span>
                </label>
                <textarea
                  name='message'
                  // value={message}
                  // onChange={(e) => {
                  //   setMessage(e.target.value);
                  // }}
                  className='bg-transparent border-b text-sm py-1 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-sky-500 font-light text-sky-500'
                ></textarea>

                <div className='flex flex-row items-center justify-start'>
                  <button
                    type='submit'
                    className='px-10 mt-8 py-2 bg-[#133140] text-gray-50 font-light rounded-md text-lg flex flex-row items-center'
                  >
                    שלח
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.dgwFooter} text-white text-base`}>
        powered by mikha
      </div>
    </footer>
  );
};
export default Footer;
