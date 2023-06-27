import styles from "./index.module.css";
import Image from "next/image";
import NavLink from "../../NavLink";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const WebHeader = () => {
  const [menuClicked, setMenuClicked] = useState(false);
  const dynamicRoute = useRouter().asPath;
  useEffect(() => setMenuClicked(false), [dynamicRoute]);
  return (
    <div className={styles.webHeaderContainer}>
      <div className={styles.webLogo}>
        <NavLink href="/" className="" activeClassName="">
          <Image
            alt="page cover"
            src="/logo3.png"
            width={192}
            height={50}
            objectFit="scale-down"
          />
        </NavLink>
      </div>
      <div className={styles.menuContainer}>
        <nav>
          <ul className={`${menuClicked && styles.menuDisplayFlex}`}>
            <li>
              <NavLink
                href="/"
                className="text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out"
                activeClassName="text-xl text-sky-500"
                title="ראשי"
              />
            </li>
            <li>
              <NavLink
                href="/about"
                className="text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out"
                activeClassName="text-xl text-sky-500"
                title="אודות"
              />
            </li>
            <li>
              <NavLink
                href="/services"
                className="text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out"
                activeClassName="text-xl text-sky-500"
                title="שירותים"
              />
            </li>
            <li>
              <NavLink
                href=""
                className="text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out"
                activeClassName="text-xl text-sky-500"
                title="דרושים"
              />
            </li>
            <li>
              <NavLink
                href="/contact"
                className="text-sky-900 hover:text-sky-500 transition duration-300 ease-in-out"
                activeClassName="text-xl text-sky-500"
                title="צרו קשר"
              />
            </li>
          </ul>
          <div
            className={styles.burger}
            onClick={() => {
              setMenuClicked(!menuClicked);
            }}
          >
            <div className={`${styles.line1} bg-sky-900`}></div>
            <div className={`${styles.line2} bg-sky-900`}></div>
            <div className={`${styles.line3} bg-sky-900`}></div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default WebHeader;
