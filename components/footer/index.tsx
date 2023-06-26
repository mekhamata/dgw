import styles from "./index.module.css";
import ContainerCom from "../container";
import React, { useState } from "react";
import NavLink from "../NavLink";
import IconComponent from "../iconComponent";
const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerDiv}>
        <div className={styles.footerMenu}>
          <div className={`${styles.footerMenuItemContainer}`}>
            <div className="hidden sm:block">
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
                <ul className="flex align-center justify-start gap-2 mt-2">
                  <li>
                    <NavLink
                      href="/"
                      className="text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out"
                      activeClassName="text-sky-500"
                    >
                      <IconComponent
                        name="square-facebook"
                        type="fab"
                        className="text-3xl"
                      />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="/1"
                      className="text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out"
                      activeClassName="text-sky-500"
                    >
                      <IconComponent
                        name="square-instagram"
                        type="fab"
                        className="text-3xl"
                      />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="/1"
                      className="text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out"
                      activeClassName="text-sky-500"
                    >
                      <IconComponent
                        name="square-whatsapp"
                        type="fab"
                        className="text-3xl"
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
                    href="/"
                    className="text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out"
                    activeClassName="text-sky-500"
                  >
                    ראשי
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="/1"
                    className="text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out"
                    activeClassName="text-sky-500"
                  >
                    ראשי
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href=""
                    className="text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out"
                    activeClassName="text-sky-500"
                  >
                    ראשי
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href=""
                    className="text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out"
                    activeClassName="text-sky-500"
                  >
                    ראשי
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href=""
                    className="text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out"
                    activeClassName="text-sky-500"
                  >
                    ראשי
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footerMenuItemContainer}>
            <div className="hidden sm:block">
              <div
                className={`${styles.footerMenuItemTitle} text-sky-900 text-xl border-b-2 border-sky-500 my-1`}
              >
                שירותים
              </div>
              <div className={`${styles.footerMenuItemList}`}>
                <ul>
                  <li>
                    <NavLink
                      href="/"
                      className="text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out"
                      activeClassName="text-sky-500"
                    >
                      ראשי
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="/1"
                      className="text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out"
                      activeClassName="text-sky-500"
                    >
                      ראשי
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href=""
                      className="text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out"
                      activeClassName="text-sky-500"
                    >
                      ראשי
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href=""
                      className="text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out"
                      activeClassName="text-sky-500"
                    >
                      ראשי
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href=""
                      className="text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out"
                      activeClassName="text-sky-500"
                    >
                      ראשי
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className={styles.footerMenuItemContainer}>
            <div
              className={`${styles.footerMenuItemTitle} text-sky-900 text-xl border-b-2 border-sky-500 my-1`}
            >
              צרו קשר
            </div>
            <div className={`${styles.footerMenuItemList}`}>
              <form
                // onSubmit={handleSubmit}
                className="rounded-lg flex flex-col bg-white"
              >
                <label
                  htmlFor="fullname"
                  className="text-sky-900 font-light dark:text-sky-900"
                >
                  שם מלא
                  <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.5"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-sky-900 text-sm rounded-lg focus:ring-sky-900 focus:border-sky-900 block w-full pr-10 p-2.5  border-sky-900 placeholder-gray-400 focus:ring-sky-900 focus:border-sky-900"
                    placeholder="שמך המלא/ שם החברה"
                  />
                </div>

                <label
                  htmlFor="email"
                  className="text-sky-900 font-light dark:text-sky-900 mt-2"
                >
                  דוא"ל
                  <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    type="email"
                    className="bg-gray-50 border border-gray-300 text-sky-900 text-sm rounded-lg focus:ring-sky-900 focus:border-sky-900 block w-full pr-10 p-2.5  border-sky-900 placeholder-gray-400 focus:ring-sky-900 focus:border-sky-900"
                    placeholder="name@flowbite.com"
                  />
                </div>

                <label
                  htmlFor="message"
                  className="text-sky-900 font-light dark:text-sky-900 mt-2"
                >
                  נושא
                  <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      fill="none"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      stroke="currentColor"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-sky-900 text-sm rounded-lg focus:ring-sky-900 focus:border-sky-900 block w-full pr-10 p-2.5  border-sky-900 placeholder-gray-400 focus:ring-sky-900 focus:border-sky-900"
                    placeholder="נושא..."
                  />
                </div>

                <label
                  htmlFor="message"
                  className="text-sky-900 font-light dark:text-sky-900 mt-2"
                >
                  הודעה<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400 opacity-50"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      ></path>
                    </svg>
                  </div>
                  <textarea
                    id="message"
                    rows={4}
                    className="bg-gray-50 border border-gray-300 text-sky-900 text-sm rounded-lg focus:ring-sky-900 focus:border-sky-900 block w-full pr-10 p-2.5  border-sky-900 placeholder-gray-400 focus:ring-sky-900 focus:border-sky-900"
                    placeholder="השאירו הודעה..."
                  ></textarea>
                </div>

                <div className="flex flex-row items-center justify-start mt-3">
                  <button className="bg-sky-900 hover:bg-sky-500 text-white font-bold py-2 px-4 border-b-4 border-sky-500 hover:border-sky-900 rounded">
                    שלח/י
                  </button>
                </div>
              </form>
            </div>
          </div> */}
        </div>
      </div>
      <div className={`${styles.dgwFooter} text-white text-base`}>
        powered by mikha
      </div>
    </footer>
  );
};
export default Footer;
