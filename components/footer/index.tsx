import styles from "./index.module.css";
import ContainerCom from "../container";
import React, { useState } from "react";
import NavLink from "../NavLink";
import IconComponent from "../iconComponent";
const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerDiv}>
        <div className={styles.container}>
          <div className={styles.footerMenu}>
            <div className={`${styles.footerMenuItemContainer}`}>
              <div className="hidden sm:block">
                <div
                  className={`${styles.footerMenuItemTitle} text-sky-900 text-xl border-b-2 border-sky-500 my-1`}
                >
                  מי אנחנו
                </div>
                <div className={`${styles.footerMenuItemList} text-sky-900`}>
                  DGW – דיגיטל וויב הינה חברה המתמחה בעיצוב ופיתוח אתרי אינטרנט
                  ומערכות אינטרנט משולבות. ל- DGW יש יותר מ-15 שנות ניסיון במתן
                  שירותי תכנות מקצועיים.
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
                          name="linkedin"
                          type="fab"
                          className="text-3xl"
                        />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        href="https://www.instagram.com/dgw.co.il/"
                        target="_blank"
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
                        href="https://wa.link/62zvnv"
                        target="_blank"
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
                      activeClassName=""
                    >
                      ראשי
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="/about"
                      className="text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out"
                      activeClassName=""
                    >
                      אודות
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="/services"
                      className="text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out"
                      activeClassName=""
                    >
                      שירותים
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href=""
                      className="text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out"
                      activeClassName=""
                    >
                      דרושים
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      href="/contact"
                      className="text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out"
                      activeClassName=""
                    >
                      צור קשר
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
                        href="/services"
                        className="text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out"
                        activeClassName=""
                      >
                        בניית אתרים
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        href="/services"
                        className="text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out"
                        activeClassName=""
                      >
                        בניית חנות מסחרית
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        href="/services"
                        className="text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out"
                        activeClassName=""
                      >
                        עיצוב אתרים
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        href="/services"
                        className="text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out"
                        activeClassName=""
                      >
                        אחסון אתרים
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        href="/services"
                        className="text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out"
                        activeClassName=""
                      >
                        מיתוג עסקי
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        href="/services"
                        className="text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out"
                        activeClassName=""
                      >
                        אופטימיזציה SEO
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.dgwFooter} text-white text-base`}>
        All Rights Reserved | <span>DGW © 2023</span>
      </div>
    </footer>
  );
};
export default Footer;
